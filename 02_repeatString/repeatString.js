const repeatString = function(myString, myNum) {
    if (myNum > 0 )
    {
        return myString.repeat(myNum);
    }
    else if (myNum == 0)
    {
        return "";
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
