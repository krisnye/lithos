
/**
 * A component must emit connected/disconnected events when connected and disconnected from a dom.
 */
export interface Component extends EventTarget {
    /**
     * Is this component active and connected to the containing dom?
     */
    readonly isConnected: boolean;
}
