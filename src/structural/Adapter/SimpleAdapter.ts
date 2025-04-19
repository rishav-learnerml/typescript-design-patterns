class Square {
  constructor(private _side: number) {}

  getSide(): number {
    return this._side;
  }

  area(): number {
    return this._side * this._side;
  }
}

class Rectangle {
  constructor(private _height: number, private _width: number) {}

  getHeight(): number {
    return this._height;
  }

  getWidth(): number {
    return this._width;
  }

  area(): number {
    return this._height * this._width;
  }
}

class SquareToRectangle {
  constructor(private _square: Square) {}

  getHeight(): number {
    return this._square.getSide();
  }

  getWidth(): number {
    return this._square.getSide();
  }

  area(): number {
    return this._square.getSide() * this._square.getSide();
  }
}

export {Rectangle, Square, SquareToRectangle}