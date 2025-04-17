abstract class PaymentProcessor {
  protected _accountBalance: number;

  constructor(deposit: number) {
    this._accountBalance = deposit;
  }

  abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
  public processPayment(amount: number): void {
    if (amount > this._accountBalance) {
      throw new Error("Insufficient Balance in you Credit Card!!");
    }
    this._accountBalance -= amount;
    console.log(
      `Inr. ${amount} deducted from Credit Card! Available Balance ${this._accountBalance}`
    );
  }
}

class DebitCardProcessor extends PaymentProcessor {
  public processPayment(amount: number): void {
    if (amount > this._accountBalance) {
      throw new Error("Insufficient Balance in you Debit Card!!");
    }
    this._accountBalance -= amount;
    console.log(
      `Inr. ${amount} deducted from Debit Card! Available Balance ${this._accountBalance}`
    );
  }
}

class UPIProcessor extends PaymentProcessor {
  public processPayment(amount: number): void {
    if (amount > this._accountBalance) {
      console.log("Insufficient Balance in your Bank Account!!");
      return;
    }
    this._accountBalance -= amount;
    console.log(
      `Inr. ${amount} deducted from Savings Ac Via UPI! Available Balance ${this._accountBalance}`
    );
  }
}

class ProcessPaymentFactory {
  public getPaymentGateway(type: "upi" | "credit" | "debit", deposit: number) {
    switch (type) {
      case "upi":
        return new UPIProcessor(deposit);
      case "credit":
        return new CreditCardProcessor(deposit);
      case "debit":
        return new DebitCardProcessor(deposit);
    }
  }
}

export default ProcessPaymentFactory;
