
export type StringKeyof<T> = Exclude<keyof T, symbol | number>;

export type Primitive = string | number | boolean | null | undefined
export type Collection = Array<unknown> | Map<unknown, unknown> | Set<unknown>
export type TypedArray = Uint8Array | Int8Array
    | Uint16Array | Int16Array
    | Uint32Array | Int32Array
    | Float32Array | Float64Array;

// This is being used to expand out some massive types and is hanging the compiler.
export type Simplify<T> =
    T extends Primitive | TypedArray | Blob | Function ? T :
    T extends Array<infer A> ? Array<Simplify<A>> :
    T extends Set<infer A> ? Set<Simplify<A>> :
    T extends Map<infer A, infer B> ? Map<Simplify<A>, Simplify<B>> :
    T extends {} ?
    {
        [K in keyof T]: Simplify<T[K]>
    }
    : T;

export type RequiredKeys<T extends object> = { [K in keyof T]-?:
    ({} extends { [P in K]: T[K] } ? never : K)
}[keyof T];

export type OptionalKeys<T extends object> = Exclude<{
    [K in keyof T]: T extends Record<K, T[K]>
    ? never
    : K
}[keyof T], undefined>

// export type Callback<T> = (value: T) => void;
// export type Unobserve = () => void
export type Constructor<T extends object> = new (...args: any[]) => T
export type ClassExtender<BaseType extends object, NewInterface extends object> = (base: Constructor<BaseType>) => Constructor<BaseType & NewInterface>;

type UnionToIntersection<U> =
    (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

export type NoUnion<Key> =
    // If this is a simple type UnionToIntersection<Key> will be the same type, otherwise it will an intersection of all types in the union and probably will not extend `Key`
    [Key] extends [UnionToIntersection<Key>] ? Key : never;

export type CancelCallback = () => void
export type RequestCallback = (callback: () => void) => CancelCallback;

export type MayNotExist<T> = T | null | undefined;

export type DeepReadonly<T> =
    T extends Primitive | TypedArray | Blob ? T :
    T extends Set<infer A> ? ReadonlySet<A> :
    T extends Map<infer A, infer B> ? ReadonlyMap<A, B> :
    T extends Array<infer U> ? ReadonlyArray<DeepReadonly<U>> :
    T extends {} ?
    {
        readonly [P in keyof T]: DeepReadonly<T[P]>
    }
    : Readonly<T>;

export type Extends<A extends B, B> = true;