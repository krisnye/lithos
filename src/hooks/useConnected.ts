import { getActiveFunctionalComponent } from "../core/FunctionalComponent.js"
import { EffectCallback, useEffect } from "./useEffect.js";

function empty() {
}

export function useConnected(callback: EffectCallback, dependencies?: unknown[]) {
    const component = getActiveFunctionalComponent();

    let disconnect: (() => void) | undefined;
    function onConnect() {
        if (!disconnect) {
            disconnect = callback() ?? empty;
        }
    }

    function onDisconnect() {
        if (disconnect) {
            disconnect();
            disconnect = undefined;
        }
    }

    //  TODO
    if (component.isConnected) {
        onConnect();
    }

    useEffect(() => {
        component.addEventListener("connected", onConnect);
        component.addEventListener("disconnected", onDisconnect);

        return () => {
            component.removeEventListener("connected", onConnect);
            component.removeEventListener("disconnected", onDisconnect);

            onDisconnect();
        }

    }, dependencies);
}