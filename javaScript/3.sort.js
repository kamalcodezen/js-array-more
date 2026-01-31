let cities = ["hyderabad", "delhi", "kolkata", "pune", "mumbai"];



let sortCity = cities.slice().sort(); //all array cut then sort
console.log("array sort =", sortCity);

console.log(cities); // original array

// let sort_array = cities.sort(); // array sort but original array change
// console.log(sort_array);




/**===================================
 * sort -->
 * const =  [ 4, 7, 2, 9, 6, 5 ];
 * ascending --> smaller to larger : [2, 4, 5, 6, 7, 9];
 * descending --> larger to smaller : [9, 7, 6, 5, 4, 2]
 * 
 * ================================== */

const numbers = [2, 67, 8, 4, 93, 7];

const number_asc = [...numbers].sort(function (a, b) { return a - b }); //another way array sort but original array not change
console.log(number_asc);

const number_dsc = numbers.slice().sort(function (a, b) { return b - a }); //another way array sort but original array not change
console.log(number_dsc);

console.log(numbers)