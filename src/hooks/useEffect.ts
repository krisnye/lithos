import { FunctionalComponent, getActiveFunctionalComponent } from "../core/FunctionalComponent.js"
import { arraysEqualShallow } from "../core/private/functions.js";

export type EffectCallback = () => (void | (() => void))
type EffectHookState = { dispose?: () => void, dependencies: unknown[] };

export function useEffect<T extends FunctionalComponent>(callback: EffectCallback, dependencies: unknown[] = []) {
    const component = getActiveFunctionalComponent() as T;
    const hookIndex = component.hookIndex++;
    const oldHookState = component.hooks[hookIndex] as EffectHookState | undefined;
    let rerunEffect = !oldHookState || !arraysEqualShallow(dependencies, oldHookState.dependencies);
    if (rerunEffect) {
        oldHookState?.dispose?.();
        component.hooks[hookIndex] = { dispose: callback.call(component) ?? undefined, dependencies };
    }
}
