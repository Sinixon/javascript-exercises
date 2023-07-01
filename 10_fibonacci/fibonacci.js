const fibonacci = function(number) {
    if (number < 0) return "OOPS"
	const fib = [0, 1];
	for (let i = 1; i < number; i++) {
		fib.push(fib[i] + fib[i -1]);
	}
	return fib[number];
};

// Do not edit below this line
module.exports = fibonacci;
