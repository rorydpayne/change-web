export class MonetaryAmount {
  constructor(private currencyCode: string, private amount: number) {}

  getCurrencyCode(): string {
    return this.currencyCode;
  }

  getAmount(): number {
    return this.amount;
  }
}
