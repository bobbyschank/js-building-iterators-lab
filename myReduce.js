// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(array, callback, initialValue) {

//  CODE INSIDE HERE   //
	let result;

	// rare case of empty array and initialValue
	if (initialValue && array.length === 0) {
  		console.log("(i === 0 && initialValue && array.length === 0)");
  		result = initialValue;
  		return result;
  	}

  	for (let i = 0; i < array.length ; i++) {

  		console.log('i: ' + i);

	  	if (i === 0 && initialValue) {//first iteration, given initial value
	  		console.log('initialValue: ' + initialValue);
	  		result = callback(initialValue, array[i], i, array);
	  		console.log('first run' + result);
	  	}
	  	else if (i === 0 && !initialValue) {//first run, no initial value
	  		result = callback(array[0], array[1], 1, array); 
	  	}
	  	else {
	  		var current = callback(result, array[i], i, array);
	  		result = current;
	  	}	
		console.log('result: ' + result);
  	}
  	return result;
}


/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
