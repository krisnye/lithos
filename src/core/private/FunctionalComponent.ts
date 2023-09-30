import { Component } from "../Component.js"
import { Factory } from "../Factory.js"
import { objectsEqualShallow } from "./functions.js"
import { Constructor } from "../types.js"

export type FunctionalComponent<BaseType extends Component = Component, Properties extends object = object> = BaseType & {
    properties: Properties
    hookIndex: number
    hooks: any[]
    requestUpdate(): void
}

export function createFunctionalComponentClass<C extends Component, P extends object>(
    baseClass: Constructor<C>,
    update: (properties: P) => Factory<C>
): Constructor<FunctionalComponent<C, P>> {
    class CustomFunctionalComponent extends (baseClass as Constructor<Component>) {
        private _properties?: P

        public hookIndex: number = 0
        public readonly hooks: any[] = []

        constructor() {
            super()
            this.updateAndBuild = this.updateAndBuild.bind(this)   //  bind so we can pass to requestUpdate as callback
        }

        get properties(): P {
            return this._properties!
        }
        set properties(value: P) {
            if (!this._properties || !objectsEqualShallow(value, this._properties)) {
                this._properties = value
                this.updateAndBuild()
            }
        }

        requestUpdate(): void {
            // could defer this till next frame
            this.updateAndBuild()
        }

        public updateAndBuild() {
            this.hookIndex = 0
            activeFunctionalComponentStack.push(this)
            try {
                let factory = update.call(this, this.properties)
                factory.build(this as any)
            }
            finally {
                activeFunctionalComponentStack.pop()
            }
        }
    }
    return CustomFunctionalComponent as any
}

const activeFunctionalComponentStack: FunctionalComponent[] = []
export function getActiveFunctionalComponent() {
    return activeFunctionalComponentStack[activeFunctionalComponentStack.length - 1]
}