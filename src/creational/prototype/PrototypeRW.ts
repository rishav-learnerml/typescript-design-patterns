enum Gender {
  Male = "male",
  Female = "female",
  Others = "others",
}

interface User {
  username: string;
  password: string;
  email: string;
  gender: Gender;
}

abstract class LinkedinUser {
  private _userDetails: User;
  public constructor(userDetails: User) {
    this._userDetails = userDetails;
  }

  get userDetails() {
    return this._userDetails;
  }

  set userDetails(userDetails: User) {
    this._userDetails = userDetails;
  }

  abstract clone(): LinkedinUser;

  abstract getUserDetails(): void;
}

class Creator extends LinkedinUser {
  private _followers: number;

  public constructor(userData: User, followers: number) {
    super(userData);
    this._followers = followers;
  }

  get followerCount() {
    return this._followers;
  }

  set followerCount(followers: number) {
    this._followers = followers;
  }

  public clone() {
    const clonedProperties: User = {
      username: this.userDetails.username,
      email: this.userDetails.email,
      password: this.userDetails.password,
      gender: this.userDetails.gender,
    };
    return new Creator(clonedProperties, this._followers);
  }

  public getUserDetails() {
    console.log(
      `Creator : ${this.userDetails.username} has ${this._followers} followers`
    );
  }
}

class Recruiter extends LinkedinUser {
  private _isHiring: boolean;

  public constructor(userData: User, isHiring: boolean) {
    super(userData);
    this._isHiring = isHiring;
  }

  get hiringStatus() {
    return this._isHiring;
  }

  set hiringStatus(hiringStatus: boolean) {
    this._isHiring = hiringStatus;
  }

  public clone() {
    const clonedProperties: User = {
      username: this.userDetails.username,
      email: this.userDetails.email,
      password: this.userDetails.password,
      gender: this.userDetails.gender,
    };
    return new Recruiter(clonedProperties, this._isHiring);
  }

  public getUserDetails() {
    console.log(
      `Recruiter: ${this.userDetails.username} is ${
        this._isHiring ? "Hiring " : "Not Hiring "
      } now!`
    );
  }
}

export { LinkedinUser, Creator, Recruiter, Gender };
