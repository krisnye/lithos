import { Factory } from "../core/Factory.js"
import { createFunctionalComponentClass } from "../core/FunctionalComponent.js"
import { Constructor } from "../core/types.js"
import { CreateFunction, ElementProperties, element } from "./private/ElementFactory.js"
import { htmlElementToType } from "./private/elements.html.generated.js"
import { HTMLElementTagNameMapExact } from "./elements.js"
import { CustomElementFactory, ShadowMode } from "./private/CustomElementFactory.js"

export interface CustomElementProperties extends ElementProperties {
}

let customElementCount = 0;
//  if base type is not specified then we extend span.
export function createCustomElement<P extends CustomElementProperties>(
    update: (this: HTMLSpanElement, properties: P) => Factory<HTMLSpanElement & { tagName: "span" }>,
    options?: { tagName?: string, shadow?: ShadowMode }
): CreateFunction<HTMLSpanElement, P>
//  if base type is specified then we must return a factory of that type from the render function
export function createCustomElement<P extends CustomElementProperties, Extends extends keyof typeof htmlElementToType>(
    update: (this: HTMLElementTagNameMapExact[Extends], properties: P) => Factory<HTMLElementTagNameMapExact[Extends]>,
    options: { tagName?: string, shadow?: ShadowMode, extends: Extends }
): CreateFunction<HTMLElementTagNameMapExact[Extends], P>
export function createCustomElement<P extends CustomElementProperties, Extends extends keyof typeof htmlElementToType>(
    update: (this: HTMLElementTagNameMapExact[Extends], properties: P) => Factory<HTMLElementTagNameMapExact[Extends]>,
    options: { tagName?: string, shadow?: ShadowMode, extends?: Extends } = {}
): CreateFunction<HTMLElementTagNameMapExact[Extends], P> {
    const { tagName = `custom-${customElementCount++}` } = options;
    const baseClass = options.extends ? htmlElementToType[options.extends] : HTMLElement;
    const newFunctionalClass = createFunctionalComponentClass(baseClass, update);
    customElements.define(tagName, newFunctionalClass, { extends: options.extends });
    return element<HTMLElementTagNameMapExact[Extends], P>(
        "http://www.w3.org/1999/xhtml",
        tagName,
        newFunctionalClass as unknown as Constructor<HTMLElementTagNameMapExact[Extends]>,
        (_namespace, tagName, type, properties) => new CustomElementFactory(tagName, type as any, properties, options.extends, options.shadow) as any
    );
}
