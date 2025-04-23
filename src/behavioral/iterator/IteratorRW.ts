interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface UserIterator<T> {
  next(): T;
  hasNext(): boolean;
}

class ConcreteUser {
  private _user;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    this._user = {
      firstName,
      lastName,
      email,
      password,
    };
  }

  getUserDetails() {
    console.log(`User Details : `);
    console.log(`User Name : ${this._user.firstName} ${this._user.lastName}`);
    console.log(`User Email : ${this._user.email}`);
  }
}

class ConcreteUserIterator implements UserIterator<User> {
  private _index: number = 0;
  constructor(private _users: User[]) {}

  next(): User {
    const result = this._users[this._index++];
    return result;
  }

  hasNext(): boolean {
    return this._index < this._users.length;
  }
}

export { ConcreteUser, ConcreteUserIterator, User };
