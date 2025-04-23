interface RideStrategy {
  ride(amount: number): void;
}

class SharedRideStrategy implements RideStrategy {
  ride(amount: number): void {
    console.log(`Finding a shared ride for $${amount}`);
  }
}
class PremireRideStrategy implements RideStrategy {
  ride(amount: number): void {
    console.log(`Finding a premire ride for $${amount}`);
  }
}
class GoRideStrategy implements RideStrategy {
  ride(amount: number): void {
    console.log(`Finding a go ride for $${amount}`);
  }
}

class BookCab {
  private _amount: number = 0;
  constructor(private _strategy: RideStrategy) {}

  setRide(strategy: RideStrategy): void {
    this._strategy = strategy;
  }

  rideCab(amount: number): void {
    this._strategy.ride(amount);
    this._amount += amount;
  }

  completeRide(): void {
    console.log("Ride Completed!");
    this._amount = 0;
  }
}

export {BookCab,GoRideStrategy,PremireRideStrategy,SharedRideStrategy}