// >> find the biggest number in an array
const max= Math.max(4165, 67, 16, 6381, 34196, 64)
// console.log(max)


// >> wont work
// const numbers= [5, 546, 645, 31, 415, 31, 684]
// const largest = Math.max(numbers)
// console.log(largest)

// >> use (Math.max...numbers)- this instead "..."
const numbers= [5, 546, 645, 31, 415, 31, 684]
const largest = Math.max(...numbers)
// console.log(largest)

// >>
const numbers1= [...numbers]
numbers.push(56)
numbers1.push(666)
console.log(numbers)
console.log(numbers1)

// >>
const numbers2= [98, 630, ...numbers, 444]
console.log(numbers2)