import { Factory } from "../../core/Factory.js";

export class TextFactory extends Factory<Text, string> {

    constructor(
        text: string
    ) {
        super(Text, text);
    }

    public override build(recycle?: Text | undefined): Text {
        if (recycle) {
            recycle.textContent = this.properties;
            return recycle;
        }
        return document.createTextNode(this.properties);
    }

}
