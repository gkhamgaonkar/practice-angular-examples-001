/*
 * Tuple is like array but they enable storing multiple fields of different types. Tuples can also be passed as parameters to functions.
 * */

var mytuple = [10, "Hello"];

/*
 * Function to concatenate values of Tuples and return as string
 */
function concatinateTuples(mytuple: any[]) : any {
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



