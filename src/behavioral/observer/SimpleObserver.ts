interface Observer {
  update(subject: Subject): void;
}

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
  getState(): number;
  setState(state: number): void;
}

class ConcreteObserver implements Observer {
  constructor(private _id: number) {}
  update(subject: Subject): void {
    console.log(
      `Observer ${this._id} is updated to new state : ${subject.getState()}`
    );
  }
}

class ConcreteSubject implements Subject {
  private _observers: Observer[] = [];
  private _state: number = 0;

  addObserver(observer: Observer): void {
    if (this._observers.includes(observer)) {
      return console.log("Observer already exists!");
    }
    this._observers.push(observer);
    console.log("Observer Succesfully Added!");
  }

  removeObserver(observer: Observer): void {
    const idx = this._observers.indexOf(observer);
    if (idx === -1) {
      return console.log("Observer doesn't exists");
    }
    this._observers.splice(idx, 1);
    console.log("Observer Succesfully Removed!");
  }

  notifyObservers(): void {
    console.log("Notifying all observers...");
    this._observers.forEach((observer: Observer) => observer.update(this));
  }

  getState(): number {
    
    return this._state;
  }

  setState(state: number): void {
    console.log("Setting State...");

    this._state = state;
    this.notifyObservers();
  }
}

export {Observer,Subject,ConcreteObserver,ConcreteSubject}