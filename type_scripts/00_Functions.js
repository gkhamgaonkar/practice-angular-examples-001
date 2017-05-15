/**
 * (Rest Parameters) - Variable argument - 01
 * The method passes variable argument to the method
 * salutation is an optional parameter
 * */
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    console.log("calling addNumbers with params " + nums);
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers : " + sum);
    return sum;
}
/**
 * (Rest Parameters) - Variable argument - 02
 * The method passes variable argument to the method , has optional pameters in front
 * No parameter is allowed after Rest Parameters
 * salutation is an optional parameter
 * */
function addNumbersOptionalPametersInFront(salutation) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    console.log("calling addNumbersOptionalPametersInFront with params " + salutation + " and  " + nums);
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    if (salutation != undefined) {
        console.log(salutation + ",sum of the numbers : " + sum);
    }
    else {
        console.log("sum of the numbers : " + sum);
    }
}
/**
 * Default Values for Parameters - 01
 * Default value parameter should always be the last parameter
 */
function multiplicationByFactor(numberValue, factor) {
    if (factor === void 0) { factor = 0.1; }
    console.log("calling multiplicationByFactor with params " + numberValue + " and  " + factor);
    return numberValue * factor;
}
/**
 * Anonymous Functions - 01 calculate square
 */
var square = function (a) {
    return a * a;
};
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
/*
 * Anonymous Functions - 03 anonymous recursive function
 */
(function (logValue) {
    var x = "Hello!!";
    console.log(logValue);
})("Hello Ji!!"); // the function invokes itself using a pair of parentheses ()
/*
 * Lambda Functions - 01 add x and y
 */
var addTwoNumbers = function (x, y) { return y + x; };
/*
 * Lambda Functions - 03 add x and y
 * data type is not mandatory (x:number , y:number) can be replaced by (x , y)
 */
var addTwoNumbersAndLog = function (x, y) {
    var z = y + x;
    console.info(z);
    return z; // the return statement to return the value
};
/*
 * Lambda Functions - 03 no parameters passed
 */
var LamdaFunctionSayHelloWorld = function () {
    console.info("Hello World");
};
function sayHello(name, lastName) {
    if (lastName == undefined) {
        console.log("Hello " + name);
    }
    else {
        console.log("Hello " + name + "  " + lastName);
    }
}
function disp() {
    return new Array("Mary", "Tom", "Jack", "Jill");
}
;
/***
 * runs with different values
 *
 */
log("==============(Rest Parameters)==============");
log("Variable argument");
addNumbers(10, 10, 10, 10, 10);
log("Optional parameters in front , value passed ");
addNumbersOptionalPametersInFront("Hello", 1, 2, 3);
log("Optional parameters in front");
addNumbersOptionalPametersInFront(null, 1, 2, 3);
log("==============(Default parameters)==============");
log("Without Passing variable with default value as  params ");
log("Result =  " + multiplicationByFactor(addNumbers(10, 10, 10, 10, 10)), "WARN");
log("Passing variable with default value as  params ", "INFO");
log("Result =  " + multiplicationByFactor(50, 0.3), "ERROR");
log("==============(Anonymous Functions )==============");
log("Square of " + 12 + " is : " + square(12));
log("==============(Lambda Functions)==============");
log("Result of adding 100 and 12 is : " + addTwoNumbers(100, 12));
log("Result of adding 100 and 12 is : " + addTwoNumbersAndLog(100, 12)); // will have an additional log
LamdaFunctionSayHelloWorld();
sayHello("abc");
sayHello("abc", "pqr");
var nums = disp();
for (var i in nums) {
    console.log(nums[i]);
}
