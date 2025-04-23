interface ICommand {
  execute(): void;
  undo(): void;
}

class Light {
  public turnOn(): void {
    console.log("Light is being turned on!");
  }

  public turnOff(): void {
    console.log("Light is being turned off!");
  }
}

class TurnOnCommand implements ICommand {
  constructor(private _light: Light) {}

  execute(): void {
    this._light.turnOn();
  }

  undo(): void {
    this._light.turnOff();
  }
}

class TurnOffCommand implements ICommand {
  constructor(private _light: Light) {}

  execute(): void {
    this._light.turnOff();
  }

  undo(): void {
    this._light.turnOn();
  }
}

class SimpleRemoteControl {
  private currentCommand!: ICommand;
  private undoCommand!: ICommand;
  private commandQueue: ICommand[] = [];


  public setCommand(command:ICommand):void{
    this.undoCommand=this.currentCommand;
    this.currentCommand=command;
    this.commandQueue.push(command)
  }

  public buttonWasPressed():void{
    if(this.commandQueue.length){
        const command=this.commandQueue.shift();
        command?.execute()
    }
  }

  public undoButtonWasPressed():void{
    this.undoCommand.execute()
  }

  public hasCommands():boolean{
    return this.commandQueue.length>0
  }
}

export {SimpleRemoteControl,TurnOffCommand,TurnOnCommand,Light}