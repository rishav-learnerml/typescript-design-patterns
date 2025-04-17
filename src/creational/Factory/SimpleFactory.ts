abstract class Movie {
  constructor(
    public title: String,
    public rating: number,
    public releasedate: Date
  ) {}

  abstract disPlayMovieInfo(): void;
}

class HorrorMovie extends Movie {
  public disPlayMovieInfo(): void {
    console.log(
      `${this.title} is playing Now! It's a Horror Movie. It has a rating of ${this.rating} and was released on ${this.releasedate}`
    );
  }
}

class ComedyMovie extends Movie {
  public disPlayMovieInfo(): void {
    console.log(
      `${this.title} is playing Now! It's a Comdey Movie. It has a rating of ${this.rating} and was released on ${this.releasedate}`
    );
  }
}

class ThrillerMovie extends Movie {
  public disPlayMovieInfo(): void {
    console.log(
      `${this.title} is playing Now! It's a Thriller Movie. It has a rating of ${this.rating} and was released on ${this.releasedate}`
    );
  }
}

class MovieFactory {
  public CreateMovie(
    genre: "horror" | "comedy" | "thriller",
    title: string,
    rating: number,
    releaseDate: Date
  ) {
    switch (genre) {
      case "horror":
        return new HorrorMovie(title, rating, releaseDate);
      case "comedy":
        return new ComedyMovie(title, rating, releaseDate);
      case "thriller":
        return new ThrillerMovie(title, rating, releaseDate);
    }
  }
}

export default MovieFactory;
