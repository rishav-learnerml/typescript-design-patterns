class ArrayIterator<T> {
  private _index: number = 0;
  private _collection: T[] = [];

  constructor(collection: T[]) {
    this._collection = collection;
  }

  next(): T {
    const result: T = this._collection[this._index];
    this._index++;
    return result;
  }

  hasNext(): boolean {
    return this._index < this._collection.length;
  }
}

export { ArrayIterator };
