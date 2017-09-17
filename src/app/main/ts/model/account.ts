import {Serializable} from "./serializable";
export class Account implements Serializable<Account> {

  externalId: string;
  created: Date;
  description: String;
  type: String;

  constructor() {}

  getExternalId(): string {
    return this.externalId;
  }

  getCreated(): Date {
    return this.created;
  }

  getDescription(): String {
    return this.description;
  }

  getType(): String {
    return this.type;
  }

  serialize(): Object {
    let output = {};
    output["externalId"] = this.externalId;
    output["created"] = this.created;
    output["description"] = this.description;
    output["type"] = this.type;
    return output;
  }

  deserialize(input: Object): Account {
    this.externalId = input["externalId"];
    this.created = input["created"];
    this.description = input["description"];
    this.type = input["type"];
    return this;
  }
}
