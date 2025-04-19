interface Burger {
  getPrice(): number;
  getName(): string;
}

class ClassicBurger implements Burger {
  getName(): string {
    return "Classic Burger";
  }

  getPrice(): number {
    return 149;
  }
}

abstract class BurgerDecorator implements Burger {
  constructor(protected _burger: Burger) {}

  abstract getName(): string;
  abstract getPrice(): number;
}

class BurgerMeal extends BurgerDecorator {
  constructor(burger: Burger) {
    super(burger);
  }

  getName(): string {
    return `${this._burger.getName()}, with Fries & Coke`;
  }

  getPrice(): number {
    return this._burger.getPrice() + 100;
  }
}

export { ClassicBurger, BurgerMeal };
