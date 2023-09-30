
declare global {
    interface GlobalEventHandlersEventMap {
        connected: Event;
        disconnected: Event;
    }

    interface HTMLElement {
        connectedCallback(): void;
        disconnectedCallback(): void;
    }
}

// extend all Elements so that if extended by web components, they will emit connected/disconnected events.
HTMLElement.prototype.connectedCallback = function () {
    this.dispatchEvent(new CustomEvent("connected"));
}

HTMLElement.prototype.disconnectedCallback = function () {
    this.dispatchEvent(new CustomEvent("disconnected"));
}
