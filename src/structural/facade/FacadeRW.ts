class Movie {
  public static movies: string[] = [
    "Kal ho na ho",
    "Mai hoon na",
    "Intersteller",
  ];

  private static amount: number = 10000;

  public static get walletBalance() {
    return Movie.amount;
  }

  public static set walletBalance(amount: number) {
    Movie.amount = amount;
  }
}

class BookMovie {
  public bookMovie(movieName: string): boolean {
    if (Movie.movies.includes(movieName)) {
      console.log("Booking your seats...");
      return true;
    } else {
      console.log("The movie is unavaillable...");
      return false;
    }
  }
}

class Authenticate {
  public authenticate(username: string, password: string): boolean {
    if (username == "Rishav" && password == "Ris12345") {
      console.log("User is authenticated");
      return true;
    } else {
      console.log("Authentication Failed");
      return false;
    }
  }
}

class Paymet {
  public makePayment(amount: number): boolean {
    if (Movie.walletBalance < amount) {
      console.log("Insufficient wallet balance...");
      return false;
    } else {
      Movie.walletBalance = Movie.walletBalance - amount;
      console.log(
        "Payment Successful! available balance : ",
        Movie.walletBalance
      );
      return true;
    }
  }
}

class MovieFacade {
  public bookMovie(
    movieName: string,
    amount: number,
    username: string,
    password: string
  ) {
    let flag: boolean = true;
    const isAuthenticated = new Authenticate().authenticate(username, password);
    if (!isAuthenticated) flag = false;
    const isMovieBooked = flag ? new BookMovie().bookMovie(movieName) : null;
    if (!isMovieBooked) flag = false;

    const isPaymentSuccesful = flag ? new Paymet().makePayment(amount) : null;
    if (!isPaymentSuccesful) flag = false;

    if (flag) {
      console.log("Succesfully booked your show!");
    } else {
      console.log("Failed to book your show!");
    }
  }
}

export default MovieFacade;
