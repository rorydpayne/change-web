export interface Serializable<T> {
    serialize(): Object;
    deserialize(input: Object): T;
}
