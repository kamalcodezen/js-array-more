let numbers = [34, 6, 3, 30, 23, 53, 75, 75, 67];

let cities = ["pune", "mumbai", "kolkata", "delhi"];

// console.log(numbers.reverse()); //old array change new array return

let revArray = [...numbers].reverse(); //1way old array not change but reverse complete;
console.log(revArray);


let revArray2 = numbers.slice().reverse(); //2nd Way old array not change but reverse complete;
console.log(revArray2);


console.log(numbers);


let reverseLoop = [];
for (let i of numbers) {
    console.log(i)
    reverseLoop.unshift(i);
}
console.log(reverseLoop);



let newArray2 = [];
for (let i = 0; i < cities.length; i++) {
    let rev = cities[i];
    newArray2.unshift(rev);
}
console.log(newArray2);



let whileReverse = [];
let n = 0;
while (n < numbers.length) {
    let rev = numbers[n]
    whileReverse = rev + whileReverse;
    n++;
}
console.log(whileReverse);

let convertArray = whileReverse.split("");
console.log(convertArray);




let increment_way_reverse = [];
for (let i = cities.length - 1; i >= 0; i--) {
    let rev = cities[i];
    increment_way_reverse.push(rev);
}
console.log(increment_way_reverse);