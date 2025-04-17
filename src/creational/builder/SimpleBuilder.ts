interface Builder {
  setPartA(): void;
  setPartB(): void;
  setPartC(): void;
}

class Product {
  private _parts: string[]=[];

  public addParts(part: string) {
    this._parts.push(part);
  }

  public listParts(): void {
    console.log("Parts : ", this._parts.join(", "));
  }
}

class ConcreteBuilder implements Builder {
  private _product!: Product;

  public constructor() {
    this.reset();
  }

  public reset() {
    this._product = new Product();
  }

  public setPartA(): void {
    this._product.addParts("Part A");
  }
  public setPartB(): void {
    this._product.addParts("Part B");
  }
  public setPartC(): void {
    this._product.addParts("Part C");
  }

  public getProduct(): Product {
    const currProduct: Product = this._product;
    this.reset();
    return currProduct;
  }
}

class Director {
  private _builder!: Builder;

  public setBuilder(builder: Builder) {
    this._builder = builder;
  }

  public buildMVP1(): void {
    this._builder.setPartA();
  }
  public buildMVP2(): void {
    this._builder.setPartB();
  }
  public buildMVP3(): void {
    this._builder.setPartC();
  }
}

export { ConcreteBuilder, Director };
