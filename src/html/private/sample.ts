
import { useState } from "../../hooks/useState.js"
import { CustomElementProperties, createCustomElement } from "../createCustomElement.js"
import { html } from "../../index.js";
const { Button, Div, Span, Style, P } = html;

interface MyCustomProps extends CustomElementProperties {
    name: string
}

const HelloFunctionalShadowRoot = createCustomElement((props: MyCustomProps) => {
    const [count, setCount] = useState(0);
    const { name, ...rest } = props;
    return Span(
        rest,
        Style(`
        :host {
            display: block;
            background: blue;
            padding: 4px;
            border-radius: 8px;
        }
        span {
            color: orange;
        }
        `),
        null,
        Span(`Hello ${name} ${count}`),
        undefined,
        Button({
            on: {
                click(e) {
                    setCount(count + 1);
                }
            }
        }, "Click Me")
    );
}, { shadow: true });

const GrowButton = createCustomElement(function ({ children }) {
    return Button({
        on: {
            click: (e) => {
                this.style.width = `${this.clientWidth + 10}px`;
                this.style.height = `${this.clientHeight + 10}px`;
            }
        }
    }, ...children);
}, { extends: "button" });

export function HTMLSample() {
    return Div(
        P(
            Span("Hello"), " ", Span({ style: { color: "red" } }, "World"),
        ),
        P(
            HelloFunctionalShadowRoot({ name: "Functional" }, "hello functional content"),
        ),
        null,
        undefined,
        P(
            GrowButton("Click to Grow"),
        ),
    )
}

