interface IFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
}

interface IProductA {
  operationA(): void;
}

interface IProductB {
  operationB(): void;
  combinedOperation(collaborator: IProductA): void;
}

class ProductA implements IProductA {
  operationA(): void {
    console.log("Operation A Ran...");
  }
}

class ProductB implements IProductB {
  operationB(): void {
    console.log("Operation B Ran...");
  }

  combinedOperation(collaborator: IProductA): void {
    collaborator.operationA();
    console.log("Combined Operation Ran..");
  }
}

class AbstractFactory implements IFactory {
  createProductA(): IProductA {
    return new ProductA();
  }
  createProductB(): IProductB {
    return new ProductB();
  }
}

export default AbstractFactory;
