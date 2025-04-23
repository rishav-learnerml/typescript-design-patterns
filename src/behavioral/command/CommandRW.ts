interface ICommand {
  execute(): void;
  undo(): void;
}

class MyFileSystem {
  private _commandQueue: ICommand[] = [];

  public addCommand(command: ICommand): void {
    this._commandQueue.push(command);
  }

  public executeCommand(): void {
    if (this._commandQueue.length) {
      const command = this._commandQueue.shift();
      command?.execute();
    }
  }

  public undoCommand(): void {
    if (this._commandQueue.length) {
      const command = this._commandQueue.pop();
      command?.undo();
    }
  }

  public hasCommands(): boolean {
    return this._commandQueue.length > 0;
  }
}

class CreateFile implements ICommand {
  constructor(private _filepath: string) {}
  execute(): void {
    console.log(
      `Creating file ${this._filepath.split("/").pop()} at ${this._filepath}`
    );
  }

  undo(): void {
    console.log(
      `Reverting creation of file ${this._filepath.split("/").pop()} at ${
        this._filepath
      }`
    );
  }
}

class ReadFile implements ICommand {
  constructor(private _filepath: string) {}
  execute(): void {
    console.log(
      `Reading file ${this._filepath.split("/").pop()} at ${this._filepath}`
    );
  }

  undo(): void {
    console.log(`Can't undo a read operation`);
  }
}

class DeleteFile implements ICommand {
  constructor(private _filepath: string) {}
  execute(): void {
    console.log(
      `Deleting file ${this._filepath.split("/").pop()} at ${this._filepath}`
    );
  }

  undo(): void {
    console.log(
      `Reverting deletion of file ${this._filepath.split("/").pop()} at ${
        this._filepath
      }`
    );
  }
}

class UpdateFile implements ICommand {
  constructor(
    private _filepath: string,
    private _newcontent: string,
    private _oldcontent: string
  ) {}

  execute(): void {
    console.log(
      `Updating file ${this._filepath.split("/").pop()} at ${
        this._filepath
      } from ${this._oldcontent} to ${this._newcontent}`
    );
  }

  undo(): void {
    console.log(
      `Reverting Updation of file ${this._filepath.split("/").pop()} at ${
        this._filepath
      } from ${this._oldcontent} to ${this._newcontent}`
    );
  }
}

export { CreateFile, DeleteFile, ReadFile, UpdateFile, MyFileSystem };
