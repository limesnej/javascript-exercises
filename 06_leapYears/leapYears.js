const leapYears = function(arg) {
//leapyears are divisable by four
//leapyears divisable by 100 are not leapyears, except the ones divisable
// by 400

    if(arg % 4 === 0)
    {
        if (arg % 100 === 0 && arg % 400 !== 0)
        {
            return false;
        }
        else {
            return true;
        }

    }else {
        return false;
    }
    
}
// Do not edit below this line
module.exports = leapYears;
