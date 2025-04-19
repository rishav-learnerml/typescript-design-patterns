class Brewer {
  public brewCoffee() {
    console.log("Brewing the Coffee...");
  }
}

class Boiler {
  public boilWater() {
    console.log("Boiling the Water...");
  }
}

class Grinder {
  public grindBeans() {
    console.log("Grinding the Coffee Beans...");
  }
}

class CoffeeFacade {
  constructor(
    private grinder: Grinder,
    private boiler: Boiler,
    private brewer: Brewer
  ) {}
  public makeCoffee() {
    this.grinder.grindBeans();
    this.boiler.boilWater();
    this.brewer.brewCoffee();
    console.log("The Coffe is Ready...");
  }
}

export { Grinder, Boiler, Brewer, CoffeeFacade };
