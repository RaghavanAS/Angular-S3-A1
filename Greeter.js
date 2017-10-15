var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this._message = message;
    }
    Greeter.prototype.greet = function () {
        return this._message;
    };
    return Greeter;
}());
var greetM = new Greeter("Hello! Good Day");
alert(greetM.greet());
//# sourceMappingURL=Greeter.js.map