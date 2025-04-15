class Singleton {
    private static _instance : Singleton;
    private static _value : number = 0;

    private constructor(){}

    public static getInstance():Singleton{
        if(!Singleton._instance){
            Singleton._instance=new Singleton();
        }
        return Singleton._instance;
    }

    set setValue(value : number) {
        Singleton._value=value;
    }

    get getValue() {
        return Singleton._value;
    }
}

export default Singleton;