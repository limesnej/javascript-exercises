const sumAll = function(arr, ...args) {
    let x = arguments[0];
    let y = arguments[1]
    let sum = 0;

    if (x < 0 || typeof(x) !== "number" || typeof(y) !== "number")
    {
        return "ERROR";
    }

    for (let i = 0; i < y; i++)
    {
        if(x < y)
        {   sum += x;
            x += 1
        }
        else if (x > y)
        {
            sum += y;
            y += 1;
        }
        
    }

    let tot = sum + y;
    return tot;
};

// Do not edit below this line
module.exports = sumAll;
