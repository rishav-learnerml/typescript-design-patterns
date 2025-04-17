interface IButton {
  render(): void;
  onClick(fun: Function): void;
}

interface ICheckbox {
  render(): void;
  toggle(): void;
}

interface GUIFactory {
  createButton(): IButton;
  createCheckbox(button: IButton): ICheckbox;
}

class WindowsButton implements IButton {
  render(): void {
    console.log("Windows button rendered to UI!");
  }
  onClick(fun: Function): void {
    console.log("Windows Button Clicked...");
    fun();
  }
}

class MacButton implements IButton {
  render(): void {
    console.log("Mac button rendered to UI!");
  }
  onClick(fun: Function): void {
    console.log("Mac Button Clicked...");
    fun();
  }
}

class WindowsCheckbox implements ICheckbox {
  constructor(private _button: IButton) {}

  render(): void {
    console.log("Windows Checkbox rendered to the UI!");
  }

  toggle(): void {
    this._button.onClick(() => console.log("Toggled the Windows Checkbox!"));
  }
}

class MacCheckbox implements ICheckbox {
  constructor(private _button: IButton) {}

  render(): void {
    console.log("Mac Checkbox rendered to the UI!");
  }

  toggle(): void {
    this._button.onClick(() => console.log("Toggled the Mac Checkbox!"));
  }
}

class WindowsFactory implements GUIFactory {
  createButton(): WindowsButton {
    return new WindowsButton();
  }

  createCheckbox(button: IButton): WindowsCheckbox {
    return new WindowsCheckbox(button);
  }
}

class MacFactory implements GUIFactory {
  createButton(): MacButton {
    return new MacButton();
  }

  createCheckbox(button: IButton): MacCheckbox {
    return new MacCheckbox(button);
  }
}

export { GUIFactory, WindowsFactory, MacFactory };
