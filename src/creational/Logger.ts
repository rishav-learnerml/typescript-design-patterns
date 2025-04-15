import fs from "fs";
import path from "path";

class Logger {
  private static _instance: Logger;
  private _logpath: string;

  private constructor() {
    this._logpath = path.resolve(__dirname, "logfile.txt");
  }

  public static getInstance(): Logger {
    if (!Logger._instance) {
      Logger._instance = new Logger();
    }
    return Logger._instance;
  }

  public async log(message: string): Promise<string> {
    const date = new Date();
    //actual file write
    try {
      await fs.promises.appendFile(
        this._logpath,
        `[ ${date.toLocaleString()} ] : ${message}\n`
      );

      return `[ ${date.toLocaleString()} ] : ${message}`;
    } catch (err) {
      throw err;
    }
  }
}

export default Logger;
