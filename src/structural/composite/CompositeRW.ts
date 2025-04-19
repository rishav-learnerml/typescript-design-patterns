interface IFile {
  getName(): string;
  getSize(): number;
}

class FileClass implements IFile {
  constructor(private _filename: string, private _filesize: number) {}
  public getName(): string {
    return this._filename;
  }

  public getSize(): number {
    return this._filesize;
  }
}

interface IFolder extends IFile {
  getFiles(): FileClass[];
  addFile(file:FileClass):void
  removeFile(file:FileClass):void
}

class Folder implements IFolder{
    constructor(private _foldername:string,private _files:FileClass[]){}

    getFiles(): FileClass[] {
        return this._files;
    }

    getName(): string {
        return this._foldername
    }

    getSize(): number {
        return this._files.reduce((totalSize,file)=>totalSize+=file.getSize(),0);
    }

    addFile(file: FileClass): void {
        this._files.push(file)
    }

    removeFile(file: FileClass): void {
        const idx  = this._files.indexOf(file);
        if(idx!==-1){
            this._files.splice(idx,1);
        }
    }


}

export {FileClass,Folder}