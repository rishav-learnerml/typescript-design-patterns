interface Observer {
  update(
    humidity: number | undefined,
    temperature: number | undefined,
    pressure: number | undefined
  ): void;
}

interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

class WeatherData implements Subject {
  private _observers: Observer[];
  private _humidity: number | undefined;
  private _temperature: number | undefined;
  private _pressure: number | undefined;

  constructor() {
    this._observers = [];
  }

  notifyObservers(): void {
    if (this._humidity && this._pressure && this._temperature) {
      console.log("Notifying all observers");
      this._observers.forEach((observer: Observer) =>
        observer.update(this._humidity, this._pressure, this._temperature)
      );
    }
  }
  registerObserver(observer: Observer): void {
    if (!this._observers.includes(observer)) {
      console.log(`Adding Observer : `);
      return;
    }
    console.log("Observer already exists...");
  }
  removeObserver(observer: Observer): void {
    const idx = this._observers.indexOf(observer);
    if (idx === -1) {
      console.log("Observer doesn't exists!");
      return;
    }
    this._observers.splice(idx, 1);
    console.log("Succesfully removed the observer!");
  }
  setMeasureMents(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;
    this.notifyObservers();
  }
}

class DisplayWeather implements Observer {
  private humidity: number | undefined;
  private temperature: number | undefined;
  private pressure: number | undefined;

  constructor(private _weatherData: Subject) {
    this._weatherData.registerObserver(this);
  }

  update(
    humidity: number | undefined,
    temperature: number | undefined,
    pressure: number | undefined
  ): void {
    this.humidity = humidity;
    this.temperature = temperature;
    this.pressure = pressure;
    this.display();
  }

  display(): void {
    if (this.temperature && this.humidity && this.pressure) {
      console.log(
        `Current conditions: ${this.temperature} degrees, ${this.humidity}% ${this.pressure} air-pressure`
      );
    } else {
      ("Weather data is not availlable");
    }
  }
}

export { DisplayWeather, Observer, Subject, WeatherData };
