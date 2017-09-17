import {MonetaryAmount} from "./monetary-amount";
import {Serializable} from "./serializable";
export class AccountSettings implements Serializable<AccountSettings> {
  private id: number;
  currencyCode: string;
  weeklyDeposit: MonetaryAmount;
  roundupsEnabled: boolean;
  providerId: number;
  enabledAccountId: string;


  constructor() {
  }

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getCurrencyCode(): string {
    return this.currencyCode;
  }

  setCurrencyCode(value: string) {
    this.currencyCode = value;
  }

  getWeeklyDeposit(): MonetaryAmount {
    return this.weeklyDeposit;
  }

  setWeeklyDeposit(value: MonetaryAmount) {
    this.weeklyDeposit = value;
  }

  getRoundupsEnabled(): boolean {
    return this.roundupsEnabled;
  }

  setRoundupsEnabled(value: boolean) {
    this.roundupsEnabled = value;
  }

  getProviderId(): number {
    return this.providerId;
  }

  setProviderId(value: number) {
    this.providerId = value;
  }

  getEnabledAccountId(): string {
    return this.enabledAccountId;
  }

  setEnabledAccountId(value: string): void {
    this.enabledAccountId = value;
  }

  serialize(): Object {
    let output = {};
    output["id"] = this.id;
    output["currencyCode"] = this.currencyCode;
    output["weeklyDeposit"] = {
      "currencyCode": this.weeklyDeposit.getCurrencyCode(),
      "amount": this.weeklyDeposit.getAmount()
    };
    output["roundupsEnabled"] = this.roundupsEnabled;
    output["providerId"] = this.providerId;
    output["enabledAccountId"] = this.enabledAccountId;
    return output;
  }

  deserialize(input: Object): AccountSettings {
    this.id = input["id"];
    this.currencyCode = input["currencyCode"];
    this.weeklyDeposit = new MonetaryAmount(input["weeklyDeposit"]["currencyCode"], input["weeklyDeposit"]["amount"]);
    this.roundupsEnabled = input["roundupsEnabled"];
    this.providerId = input["providerId"];
    this.enabledAccountId = input["enabledAccountId"];
    return this;
  }
}
