interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  mobile: number;
}

interface ICustomerBuilder {
  setFirstName(firstname: string): ICustomerBuilder;
  setLastName(lastname: string): ICustomerBuilder;
  setEmail(email: string): ICustomerBuilder;
  setPhoneNo(phno: number): ICustomerBuilder;
  build(): ICustomer;
}

class Customer implements ICustomer {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public mobile: number
  ) {}
}

class CustomerBuilder implements ICustomerBuilder {
  private _firstName: string = "";
  private _lastName: string = "";
  private _email: string = "";
  private _mobile: number = 0;

  public constructor() {
    this.build();
  }

  public build(): ICustomer {
    return new Customer(
      this._firstName,
      this._lastName,
      this._email,
      this._mobile
    );
  }

  public setFirstName(firstName: string) {
    this._firstName = firstName;
    return this;
  }
  public setLastName(lastName: string) {
    this._lastName = lastName;
    return this;
  }
  public setEmail(email: string) {
    this._email = email;
    return this;
  }
  public setPhoneNo(phno: number) {
    this._mobile = phno;
    return this;
  }
}

class CustomerDirector {
  constructor(private _customer: ICustomerBuilder) {}

  public buildMinimal(firstName: string, lastName: string, email: string) {
    return this._customer
      .setFirstName(firstName)
      .setLastName(lastName)
      .setEmail(email)
      .build();
  }

  public buildComplete(
    firstName: string,
    lastName: string,
    email: string,
    phno: number
  ) {
    return this._customer
      .setFirstName(firstName)
      .setLastName(lastName)
      .setEmail(email)
      .setPhoneNo(phno)
      .build();
  }
}

export {ICustomer,ICustomerBuilder,CustomerDirector,CustomerBuilder}