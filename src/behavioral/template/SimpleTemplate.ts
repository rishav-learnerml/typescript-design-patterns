const trainList: Record<string, string[]> = {
  "21/04/2025": ["Rajdhani", "Shatabdi", "Vande Varat", "Duronto"],
  "22/04/2025": ["Rajdhani", "Shatabdi", "Vande Varat", "Duronto"],
};

abstract class IRCTCTicketBooking {
  constructor(
    protected _username: string,
    protected _password: string,
    protected _trainName: string,
    protected _date: string,
    protected _noofpeople: number,
    protected _amount: number
  ) {}
  public bookTicket():void {
    if (
      this.authenticateUser(this._username, this._password) &&
      this.findTrain(this._trainName, this._date)
    ) {
      this.getReservation(this._noofpeople);
      const payed = this.makePayment(this._amount);

      console.log(`Ticket booked Succesfully! Details : 
        
        Name: ${this._username}
        TrainName: ${this._trainName}
        date: ${this._date}
        Passengers: ${this._noofpeople}
        Amount: ${payed}

        IRCTC Wishes you a Happy & Safe Journey!
        `);
    }
  }

  protected authenticateUser(username: string, password: string): boolean {
    if (
      username.toLowerCase() === "rishav" &&
      password.toLowerCase() === "ris1234"
    ) {
      console.log("User is authenticateed");
      return true;
    } else {
      console.log("Authentication Failed!");
      return false;
    }
  }

  protected findTrain(trainName: string, date: string): boolean {
    if (trainList?.[date]?.includes(trainName)) {
      console.log(`${trainName} is available on ${date}`);
      return true;
    } else {
      console.log(`${trainName} is not available on ${date}`);
      return false;
    }
  }

  protected getReservation(noofpeople: number) {
    console.log(`Reserving ${noofpeople} seats...`);
  }

  protected abstract makePayment(amount: number): number;
}

class TatkalTicket extends IRCTCTicketBooking {
  makePayment(amount: number): number {
    console.log("Booking a Tatkal ticket with 20% more fare...");
    return amount + amount * 0.2;
  }

  protected getReservation(noofpeople: number) {
    console.log(`Reserving ${noofpeople} seats in Tatkal...`);
  }
}

class SeniorCitizenTicket extends IRCTCTicketBooking {
  makePayment(amount: number): number {
    console.log("Booking a Senior Citizen ticket with 20% less fare...");
    return amount - amount * 0.2;
  }
}

export { TatkalTicket, SeniorCitizenTicket };
