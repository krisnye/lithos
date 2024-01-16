import { FunctionalComponent } from "../../core/FunctionalComponent.js"
import { Constructor } from "../../core/types.js"
import { HTMLElementProperties, HTMLElementTagNameMapExact } from "../elements.js"
import { ElementFactory, ElementProperties } from "./ElementFactory.js"
import { htmlElementToType } from "./elements.html.generated.js";

type CustomElement<B extends HTMLElement, P extends HTMLElementProperties> = FunctionalComponent<B, P>;

export type ShadowMode = boolean; // "open" | "closed";

export class CustomElementFactory<
    T extends CustomElement<HTMLElementTagNameMapExact[E], P>,
    P extends ElementProperties,
    E extends keyof typeof htmlElementToType,
> extends ElementFactory<T, P> {

    constructor(
        tagName: string,
        componentConstructor: Constructor<T>,
        properties: P,
        protected readonly extend?: E,
        protected readonly shadow?: boolean
    ) {
        super("http://www.w3.org/1999/xhtml", tagName, componentConstructor, properties);
    }

    protected override construct(): T {
        const element = document.createElement(this.extend ?? this.tagName, { is: this.extend ? this.tagName : undefined }) as T;
        if (this.shadow) {
            element.attachShadow({ mode: "open" });
        }
        return element;
    }

    protected override configure(node: T, properties: P): void {
        super.addEvents(node, properties.on);
        node.properties = properties;
    }

}
