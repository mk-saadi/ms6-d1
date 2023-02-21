// >> dont use var

// # let
/*
 >> 1. let can be reassigned/changed
 */
let money = 264;
money = 100;
console.log(money);

// # const
/*
>> 1. const can not be reassigned/changed
*/
// >> it wont change, will cause type error
const taka = 264;
// taka = 100;
console.log(taka);

const numbers= [56, 46, 46, 43, 31, 68];
// >> change not allowed
// numbers= [645, 45, 35, 169]
// >> but
numbers[3]= 8;
numbers.push(65, 420);

console.log(numbers);