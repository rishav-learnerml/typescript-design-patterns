interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paying ${amount} via credit card`);
  }
}

class DebitCardStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paying ${amount} via debit card`);
  }
}

class UPIStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paying ${amount} via UPI`);
  }
}

class ShoppingCart {
  private _amount: number = 0;

  constructor(private _strategy: PaymentStrategy) {}

  setpaymentStrategy(strategy: PaymentStrategy) {
    this._strategy = strategy;
  }

  addToCart(amount: number) {
    this._amount += amount;
  }

  checkout() {
    this._strategy.pay(this._amount);
    this._amount=0
  }
}

export {ShoppingCart,CreditCardStrategy,DebitCardStrategy,UPIStrategy}
