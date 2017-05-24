/*
 * Tuple is like array but they enable storing multiple fields of different types. Tuples can also be passed as parameters to functions.
 * */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mytuple = [10, "Hello"];
/*
 * Function to concatenate values of Tuples and return as string
 */
function concatinateTuples(mytuple) {
    var retValue = "";
    for (var val = 0; val < mytuple.length; val++) {
        retValue = retValue + ((val == 0) ? "" : ",") + mytuple[val];
    }
    return retValue;
}
/*
 * Function to add item to tuple
 */
function addItemToTuple(myItem) {
    mytuple.push(myItem);
}
/*
 * Function popout Last Value From Tuple
 */
function popoutLastValueFromTuple() {
    return mytuple.pop();
}
/*
 * Anonymous Functions - 02 calculate square
 * Utility function : to log data
 */
var log = function (logData, logType) {
    if (logType === void 0) { logType = "DEBUG"; }
    if (logType == null || logType === undefined || logType == "DEBUG") {
        console.log("DEBUG LOG : " + logData);
    }
    else if (logType == "ERROR") {
        console.error("ERROR LOG : " + logData);
    }
    else if (logType == "WARN") {
        console.warn("WARN LOG : " + logData);
    }
    else if (logType == "INFO") {
        console.info("INFO LOG : " + logData);
    }
};
/**
 * Typescript - Union 01
 * Typescript allows a variable to store more than one datatypes
 *
 */
function unionInAction() {
    var val; // variable of either type string or number
    val = "string id";
    log("value(string) " + val);
    val = 12123;
    log("value(numeric) " + val);
}
/*
* Typescript - Union Type and Arrays
* */
function unionOfArrays() {
    var arr;
    var i;
    arr = [1, 2, 4];
    console.log("**numeric array**");
    log(concatinateTuples(arr));
    arr = ["Mumbai", "Pune", "Delhi"];
    console.log("**string array**");
    log(concatinateTuples(arr));
    // arr = ["Mumbai",2,"Delhi"];
    // console.log("**mixed array - give you compilation error**");
    // log(concatinateTuples(arr));
}
function logTypeOf(name) {
    log(typeof name);
}
function disp(name) {
    logTypeOf(name);
    if (typeof name == "string") {
        log(name);
    }
    else {
        var i;
        log(concatinateTuples(name));
    }
}
var Car = (function () {
    //constructor
    function Car(engine) {
        if (engine === void 0) { engine = "1000cc"; }
        this.engine = engine;
    }
    // multiple constructors not allowed
    // constructor() {
    //     this.engine = ""
    // }
    //function
    Car.prototype.disp = function () {
        return "Engine is  :   " + this.engine;
    };
    return Car;
}());
var Honda = (function (_super) {
    __extends(Honda, _super);
    function Honda(engine, makeCountry) {
        var _this = _super.call(this, engine) || this;
        _this.makeCountry = makeCountry;
        _this.carCompany = "Honda";
        return _this;
    }
    Honda.prototype.disp = function () {
        return _super.prototype.disp.call(this) + " company::" + this.carCompany + "  country of origin::" + this.makeCountry;
    };
    return Honda;
}(Car));
var HRV = (function (_super) {
    __extends(HRV, _super);
    function HRV(engine, makeCountry) {
        var _this = _super.call(this, engine, makeCountry) || this;
        _this.make = "Hrv";
        return _this;
    }
    HRV.prototype.disp = function () {
        return _super.prototype.disp.call(this) + " make::" + this.make;
    };
    return HRV;
}(Honda));
function loginstanceOf(obj) {
    if (obj instanceof Car) {
        log("Object is instance of Car");
    }
    if (obj instanceof Honda) {
        log("Object is instance of Honda");
    }
    if (obj instanceof HRV) {
        log("Object is instance of Hrv");
    }
}
var person = {
    firstName: "Tom",
    lastName: "Hanks"
    // sayHello:function() {  }  //Type template
};
// person.sayHello = function() {
//     console.log("hello "+person.firstName)
// }
/***
 * runs with different values
 *
 */
log("==============(Tuple)==============");
log("Concatinate Touples : " + concatinateTuples(mytuple));
log("add item to tuple");
addItemToTuple("myWorld");
addItemToTuple(1123);
log("New Touple items : " + concatinateTuples(mytuple));
log("popped value : " + popoutLastValueFromTuple());
log("New Touple items : " + concatinateTuples(mytuple));
log("popped value : " + popoutLastValueFromTuple());
log("New Touple items : " + concatinateTuples(mytuple));
log("==============(Union)==============");
unionInAction();
disp("mark");
log("Printing names array....");
disp(["Mark", "Tom", "Mary", "John"]);
unionOfArrays();
log("==============(Classes)==============");
var obj = new Car();
loginstanceOf(obj);
log(obj.disp());
log("accessing obj attribute :" + obj.engine);
obj = new Honda("1000cc", "Japan");
loginstanceOf(obj);
log(obj.disp());
obj = new HRV("1000cc", "Japan");
loginstanceOf(obj);
log(obj.disp());
//access the object values
log("==============(Objects)==============");
log(person.firstName + "," + person.lastName);
