import fs from "fs";
import path from "path";

class Logger {
  private static _instance: Logger;
  private _logpath: string;
  private static _isInitializing:boolean;

  private constructor() {
    this._logpath = path.resolve(__dirname, "logfile.txt");
    Logger._isInitializing=true;
  }

  public static async getInstance(): Promise<Logger> {
    if(this._isInitializing){
      await new Promise(r=>setTimeout(r,10));
    }
    if (!Logger._instance) {
      Logger._instance = new Logger();
    }
    this._isInitializing=false;
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
