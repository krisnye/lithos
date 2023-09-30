import { ElementProperties, element } from "../html/private/ElementFactory.js";

const svg = "http://www.w3.org/2000/svg";

type SVGElementProperties = ElementProperties;

interface SVGCircleProperties extends SVGElementProperties {
    cx: number
    cy: number
    r: number
    children: never
}

export const circle = element<SVGCircleElement, SVGCircleProperties>(svg, "circle", SVGCircleElement);
