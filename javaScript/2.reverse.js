
// Array reverse ---------

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let change = nums.slice().reverse();
console.log(change);

console.log(nums);


let rev = [];
for (let num of nums) {
    // console.log(num);
    // rev = [num, ...rev];
    rev = num + rev;
}
console.log(rev);
let str = rev.split(""); //Array string banalam
console.log(str);


let reVerse = []
for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
    let letter = nums[i];
    reVerse.unshift(letter);
}
console.log(reVerse);


let revArray = [];  // different reverse way
for (i = nums.length - 1; i >= 0; i--) {
    // console.log(nums[i]);
    let let_ter = nums[i];
    revArray.push(let_ter);
}



// string reverse ===================>

let cities = ["delhi", "mumbai", "kolkata", "pune"];

let reVers = cities.slice().reverse();
console.log(reVers);

console.log(cities);


let rev_ers = [];
let j = 0;
while (j < cities.length) {
    // console.log(cities[j]);
    let city = cities[j];
    rev_ers.unshift(city);
    j++;
}
console.log(rev_ers);