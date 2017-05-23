/*
 * Tuple is like array but they enable storing multiple fields of different types. Tuples can also be passed as parameters to functions.
 * */
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
    arr = ["Mumbai", 2, "Delhi"];
    console.log("**mixed array**");
    log(concatinateTuples(arr));
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
