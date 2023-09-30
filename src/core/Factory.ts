import { assignIfDifferent } from "./private/functions.js";
import { Constructor } from "./types.js";

export abstract class Factory<T extends object, Properties = Partial<T>> {

    constructor(
        public readonly type: Constructor<T>,
        public readonly properties: Properties,
    ) {
    }

    /**
     * Builds a new node to this factories specifications.
     * @param recycle node of the same type to reuse if available.
     */
    public build(recycle?: T): T {
        const node = recycle ?? this.construct();
        this.configure(node, this.properties);
        return node;
    }

    protected configure(node: T, properties: Properties) {
        assignIfDifferent(node, properties);
    }

    protected construct(): T {
        return new this.type();
    }

    public isInstance(node: unknown): node is T {
        return node instanceof this.type
    }

}
