/**===============================================
 * 1. for loop
 * 2. while loop 
 * 3.do while loop
 * 4.for of loop   --> array loop korar jonno
 * 5. for in loop  --> object loop korar jonno
 ================================================*/

// length ------>
let cities = ["delhi", "mumbai", "kolkata", "pune"];



for (let city of cities) {
    console.log(city);
}

for (let city = 0; city < cities.length; city++) {
    console.log(`This city name is = ${cities[city]}`);
}

let i = 0;
while (i < cities.length) {
    console.log(cities[i]);
    i++;
};




