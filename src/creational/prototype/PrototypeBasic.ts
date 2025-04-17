interface UserDetails {
  username: string;
  email: string;
  password: string;
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  private _user: UserDetails;
  public constructor(user: UserDetails) {
    this._user = user;
  }

  public clone(): ConcretePrototype {
    const clonedObj = Object.create(this);
    clonedObj._user = { ...this._user };
    return clonedObj;
  }

  public getUserDetails(): UserDetails {
      return this._user;
  }
}


export default ConcretePrototype