import { getActiveFunctionalComponent } from "../core/private/FunctionalComponent.js";

export function useState<T>(initializer: () => T): [T, (value: T) => void]
export function useState<T>(initialValue: T): [T, (value: T) => void]
export function useState<T>(initial: () => T) {
    const component = getActiveFunctionalComponent();
    const hookIndex = component.hookIndex++;
    const value = component.hooks[hookIndex] ??= typeof initial === "function" ? initial() : initial;
    return [
        value,
        (newValue: T) => {
            component.hooks[hookIndex] = newValue;
            component.requestUpdate();
        }
    ];

}