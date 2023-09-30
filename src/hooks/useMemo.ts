import { useEffect } from "./useEffect.js"
import { useState } from "./useState.js";

export function useMemo<T>(calculateValue: () => T, dependencies: unknown[] = []): T {
    const [state] = useState({ value: undefined as T })

    useEffect(() => {
        state.value = calculateValue()
    }, dependencies)

    return state.value
}
