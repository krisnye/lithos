import { Constructor, NoUnion, StringKeyof } from "../core/types.js"
import { CreateFunction, ElementProperties, element } from "./private/ElementFactory.js"
import { htmlElementToType, HTMLPropertyMap as HTMLPropertyMapGenerated } from "./private/elements.html.generated.js"
import "./private/events.js"
import { HTMLElementTagNameMapExact } from "./private/types.js"
import "./private/events.js"
import { Factory } from "../core/Factory.js"
export * from "./private/types.js"

export type HTMLElementProperties = ElementProperties;

export interface HTMLCanvasProperties extends HTMLElementProperties {
    width: number;
    height: number;
}

type HTMLScriptPropertiesGenerated = HTMLPropertyMapGenerated["script"]
export interface HTMLScriptProperties extends HTMLScriptPropertiesGenerated {
    children: Factory<Text>[];
    style?: never;
    className?: never;
    slot?: never;
}

export interface HTMLStyleProperties extends HTMLElementProperties {
    media?: string;
    disabled?: boolean;
    children: Factory<Text>[];
}

// Here you can override generated property types with narrower types.
interface HTMLPropertyMap extends HTMLPropertyMapGenerated {
    canvas: HTMLCanvasProperties,
    script: HTMLScriptProperties,
    style: HTMLStyleProperties
}

declare global {
    interface HTMLElementTagNameMap {
        "custom-element": HTMLElement;
    }
}

function htmlElement<TagName extends keyof typeof htmlElementToType>(tagName: NoUnion<TagName>) {
    return element<HTMLElementTagNameMapExact[TagName], HTMLPropertyMap[TagName]>(
        "http://www.w3.org/1999/xhtml",
        tagName,
        htmlElementToType[tagName] as Constructor<HTMLElementTagNameMapExact[TagName]>
    );
}

//  Code to automatically generate them if we want to export a single object.
type ElementFactories = { [K in Capitalize<StringKeyof<HTMLElementTagNameMap>>]: CreateFunction<HTMLElementTagNameMapExact[Lowercase<K>], HTMLPropertyMap[Lowercase<K>]> };
export const html = Object.fromEntries(Object.keys(htmlElementToType).map(tagName => [tagName[0].toUpperCase() + tagName.slice(1), htmlElement(tagName as any)])) as ElementFactories;
