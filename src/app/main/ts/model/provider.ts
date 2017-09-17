import {Serializable} from "./serializable";

export class Provider implements Serializable<Provider> {
  private id: number;
  private name: string;

  constructor() {}

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  serialize(): Object {
    let output = {};
    output["id"] = this.id;
    output["name"] = this.name;
    return output;
  }

  deserialize(input: Object): Provider {
    this.id = input["id"];
    this.name = input["name"];
    return this;
  }
}
