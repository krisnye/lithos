import { assignIfDifferent } from "../../core/private/functions.js"
import { TextFactory } from "./TextFactory.js"
import { Constructor } from "../../core/types.js"
import { Factory } from "../../core/Factory.js";

export type ElementListeners = { [Key in keyof GlobalEventHandlersEventMap]?: (event: GlobalEventHandlersEventMap[Key]) => void }
export type ElementProperties = {
    style?: Partial<CSSStyleDeclaration>,
    className?: string;
    id?: string;
    on?: ElementListeners,
    slot?: string;
    children: Factory<Node>[],
}

export type StyledElement = Element & { style: CSSStyleDeclaration };

type ElementNamespace = "http://www.w3.org/1999/xhtml" | "http://www.w3.org/2000/svg" | "http://www.w3.org/1998/Math/MathML";

const oldEventsSymbol = Symbol();

export class ElementFactory<
    T extends StyledElement,
    Properties extends ElementProperties
> extends Factory<T, Properties> {

    constructor(
        protected readonly namespace: ElementNamespace,
        protected readonly tagName: string,
        componentConstructor: Constructor<T>,
        properties: Properties
    ) {
        super(componentConstructor, properties);
    }

    protected override construct(): T {
        return document.createElementNS(this.namespace, this.tagName) as T;
    }

    protected addEvents(container: T, newEvents?: ElementListeners) {
        const oldEvents = container[oldEventsSymbol] as ElementListeners | undefined;
        container[oldEventsSymbol] = newEvents;

        if (oldEvents) {
            for (let name in oldEvents) {
                let handler = oldEvents[name];
                if (handler !== newEvents?.[name]) {
                    container.removeEventListener(name, handler);
                }
            }
        }
        if (newEvents) {
            for (let name in newEvents) {
                let handler = newEvents[name];
                if (handler !== oldEvents?.[name]) {
                    container.addEventListener(name, handler);
                }
            }
        }
    }

    protected override configure(node: T, { style, children, on: events, ...properties }: Properties): void {
        this.addEvents(node, events);
        assignIfDifferent(node, properties);
        if (style) {
            assignIfDifferent(node.style, style);
        }
        if (children) {
            this.buildChildren(node, children);
        }
    }

    protected buildChildren(node: T, childFactories: Factory<Node>[]) {
        const container = node.shadowRoot ?? node
        let maybeRecycleChild = container.firstChild;
        //  build the children recycling any old if possible
        for (let childFactory of childFactories) {
            if (maybeRecycleChild && childFactory.isInstance(maybeRecycleChild)) {
                childFactory.build(maybeRecycleChild);
                maybeRecycleChild = maybeRecycleChild!.nextSibling;
            }
            else {
                const childComponent = childFactory.build();
                if (maybeRecycleChild) {
                    container.insertBefore(childComponent, maybeRecycleChild);
                    container.removeChild(maybeRecycleChild);
                    maybeRecycleChild = childComponent.nextSibling;
                }
                else {
                    container.appendChild(childComponent);
                }
            }
        }
        //  remove any left over children
        while (maybeRecycleChild) {
            let nextSibling = maybeRecycleChild.nextSibling;
            container.removeChild(maybeRecycleChild);
            maybeRecycleChild = nextSibling;
        }
    }

}

/**
 * @param namespace the element namespace
 * @param tagName  the element tag name
 * @param type the type of element
 * @returns a user friendly, well typed function for creating a specific element type.
 */
export function element<T extends StyledElement, P extends ElementProperties>(
    namespace: ElementNamespace,
    tagName: string,
    type: Constructor<T>,
    createFactory = (namespace: ElementNamespace,
        tagName: string,
        type: Constructor<T>,
        properties: P): Factory<T, P> => new ElementFactory(namespace, tagName, type, properties)
): CreateFunction<T, P> {
    function create(propertiesOrFirstChild: P, ...otherChildren: (string | Factory<Node>)[]): Factory<T, P> {
        let properties: P | undefined;
        if (propertiesOrFirstChild instanceof Factory || typeof propertiesOrFirstChild === "string") {
            otherChildren.unshift(propertiesOrFirstChild);
        }
        else {
            properties = propertiesOrFirstChild;
        }
        properties ??= {} as P;
        properties.children = otherChildren.filter(child => child !== null && child !== undefined).map(child => typeof child === "string" ? new TextFactory(child) : child);
        return createFactory(namespace, tagName, type, properties) as Factory<T, P>;
    }
    return create as unknown as CreateFunction<T, P>;
}

type AddStringIfTextAllowed<T> = T extends Factory<Node>[] ?
    (Factory<Text>[] extends T ? (string | T[number])[] : T) :
    T;

type AddNullOrUndefinedToArrayType<T> = T extends (infer I)[] ? (I | null | undefined)[] : T;

type ChildrenType<P extends ElementProperties> =
    AddNullOrUndefinedToArrayType<AddStringIfTextAllowed<P["children"]>>;

export type CreateFunction<T extends StyledElement, P extends ElementProperties> = { children } extends P ? {
    (properties: Omit<P, "children">, ...children: ChildrenType<P>): Factory<T>,
    (...children: ChildrenType<P>): Factory<T>,
} : {
    (properties: Omit<P, "children">, ...children: ChildrenType<P>): Factory<T>,
};

