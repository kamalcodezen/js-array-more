let numbers = [34, 6, 3, 30, 23, 53, 75, 80, 67];

let cities = ["pune", "mumbai", "kolkata", "delhi"];

// let sortArray = numbers.sort(); //array sort but old array change 

let sortArray = [...numbers].sort(); // 1st way array sort but old array not change

let sortArray2 = numbers.slice().sort(); // 2nd way array sort but old array not change

console.log(sortArray);

console.log(sortArray2);

console.log(numbers);



console.log(`----------------------`)

// choto theke boro
let allSort = [...numbers].sort(function (a, b) { return a - b });
console.log(allSort);

console.log(numbers);


console.log(`-------------------`);


//  boro theke choto
let allSort2 = numbers.slice().sort(function (a, b) { return b - a });
console.log(allSort2);

console.log(numbers);