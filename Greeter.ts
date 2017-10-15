class Greeter{
    private _message: string;
    constructor(message: string) {
        this._message = message;
    }
    greet(): string{
        return this._message;
    }
}

let greetM= new Greeter("Hello! Good Day");
alert(greetM.greet());