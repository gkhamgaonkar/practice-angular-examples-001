/*
 * Tuple is like array but they enable storing multiple fields of different types. Tuples can also be passed as parameters to functions.
 * */

var mytuple = [10, "Hello"];

/*
 * Function to concatenate values of Tuples and return as string
 */
function concatinateTuples(mytuple: any) : any {
    var retValue = "";
    for (var val = 0 ; val < mytuple.length ; val++) {
        retValue = retValue + ((val==0)? "" :",") + mytuple[val];
    }
    return retValue;
}

/*
 * Function to add item to tuple
 */
function addItemToTuple(myItem: any){
    mytuple.push(myItem)
}

/*
 * Function popout Last Value From Tuple
 */
function popoutLastValueFromTuple():any{
    return mytuple.pop();
}


/*
 * Anonymous Functions - 02 calculate square
 * Utility function : to log data
 */

var log = function (logData: any, logType: String = "DEBUG") {
    if (logType == null || logType === undefined || logType == "DEBUG") {
        console.log("DEBUG LOG : " + logData);
    } else if (logType == "ERROR") {
        console.error("ERROR LOG : " + logData);
    } else if (logType == "WARN") {
        console.warn("WARN LOG : " + logData);
    } else if (logType == "INFO") {
        console.info("INFO LOG : " + logData);
    }
};

/**
 * Typescript - Union 01
 * Typescript allows a variable to store more than one datatypes
 *
 */

function unionInAction(){
    var val:string|number; // variable of either type string or number
    val = "string id";
    log("value(string) "+val);
    val = 12123;
    log("value(numeric) "+val);
}


/*
* Typescript - Union Type and Arrays
* */

function unionOfArrays(){
    var arr:number[]|string[];
    var i:number;
    arr = [1,2,4];
    console.log("**numeric array**");
    log(concatinateTuples(arr));
    arr = ["Mumbai","Pune","Delhi"];
    console.log("**string array**");
    log(concatinateTuples(arr));
    // arr = ["Mumbai",2,"Delhi"];
    // console.log("**mixed array - give you compilation error**");
    // log(concatinateTuples(arr));
}


function logTypeOf(name:any){
    log(typeof name);
}

function disp(name:string|string[]) {
    logTypeOf(name);
    if(typeof name == "string") {
        log(name)
    } else {
        var i;
        log(concatinateTuples(name))
    }
}


class Car {
    //field
    engine:string;
    makeCountry:string;
    //private make:string; making the property private will not let it be accessible to sub classes.
    make:string;
    carCompany :string;

    //constructor
    constructor(engine:string = "1000cc") {
        this.engine = engine
    }
    // multiple constructors not allowed
    // constructor() {
    //     this.engine = ""
    // }
    //function
    disp():string {
        return "Engine is  :   "+this.engine;
    }
}
class Honda extends Car {

    constructor(engine:string, makeCountry:string){
        super(engine);
        this.makeCountry= makeCountry;
        this.carCompany= "Honda";
    }

    disp():string {
        return super.disp() + " company::" +  this.carCompany + "  country of origin::" + this.makeCountry ;
    }
}

class HRV extends Honda {

    constructor(engine:string, makeCountry:string){
        super(engine,makeCountry);
        this.make= "Hrv";
    }

    disp():string {
        return super.disp() + " make::" +  this.make ;
    }
}

function loginstanceOf(obj:any){
    if(obj instanceof Car){
        log("Object is instance of Car")
    }
    if(obj instanceof Honda){
        log("Object is instance of Honda")
    }
    if(obj instanceof HRV){
        log("Object is instance of Hrv")
    }
}


var person = {
    firstName:"Tom",
    lastName:"Hanks"
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
log("Concatinate Touples : " + concatinateTuples (mytuple));
log("add item to tuple");
addItemToTuple("myWorld");
addItemToTuple(1123);
log("New Touple items : " + concatinateTuples (mytuple));
log("popped value : " + popoutLastValueFromTuple());
log("New Touple items : " + concatinateTuples (mytuple));
log("popped value : " + popoutLastValueFromTuple());
log("New Touple items : " + concatinateTuples (mytuple));
log("==============(Union)==============");
unionInAction()
disp("mark")
log("Printing names array....")
disp(["Mark","Tom","Mary","John"])
unionOfArrays();
log("==============(Classes)==============");
var obj = new Car()
loginstanceOf(obj);
log(obj.disp());
log("accessing obj attribute :"  + obj.engine);
obj = new Honda("1000cc" , "Japan");
loginstanceOf(obj);
log(obj.disp())
obj = new HRV("1000cc" , "Japan");
loginstanceOf(obj);
log(obj.disp())
//access the object values
log("==============(Objects)==============");
log(person.firstName + "," + person.lastName);


