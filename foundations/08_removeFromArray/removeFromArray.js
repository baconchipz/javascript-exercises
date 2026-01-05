const removeFromArray = function(arr, ...args)  { //...args represents multiple arguments
    return arr.filter(val => !args.includes(val)); //includes returns through if arguments or array contains val.

};

// Do not edit below this line
module.exports = removeFromArray;
