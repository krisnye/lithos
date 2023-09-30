
export type HTMLElementTagNameMapExact = { [Key in keyof HTMLElementTagNameMap]: HTMLElementTagNameMap[Key] & { tagName: Key } };

