
import { Factory } from "../core/Factory.js"
import { html } from "../html/elements.js"
import { HTMLSample } from "../html/private/sample.js";
const { H2, P, Section } = html;

function addSample(name: string, sample: () => Factory<HTMLElement>) {
    document.body.appendChild(Section(
        H2(name),
        P(
            sample()
        )
    ).build())
}

const samples = {
    "HTML": HTMLSample,
}

Object.entries(samples).forEach(entry => addSample(...entry))

