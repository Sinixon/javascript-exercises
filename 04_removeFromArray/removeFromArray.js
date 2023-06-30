const removeFromArray = function(array, ...args) {
    const tempArray = [];

    array.forEach((item) => {
        if (!args.includes(item)) {
          tempArray.push(item);
        }
      });
      
      return tempArray;
};

// Do not edit below this line
module.exports = removeFromArray;
