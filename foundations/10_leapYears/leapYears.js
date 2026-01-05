const leapYears = function(year) {
    if (year % 400 == 0){
        return true;
    }
    if (year % 100 == 0){
        return false;
    }
    if (year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
//if year divisible by 4 it is leap year
// if year divisible by 100 it is not leap year
// if year divisible by 400 then it is a leap year