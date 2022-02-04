const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Reduce returns the value of a prev calculation
// If you have just one variable, it will return the first element of the array
// If you have two variables, the first one stores the result of the callback function
// the second one is lined up to be aggregated to the previous value (e.g added; see the example below)

const totalBatteries = batteryBatches.reduce((prev, curr) => prev + curr)



