// >> function declaration
function add(first, second) {
    const total = first + second
    return total
}

const result= add(5, 7)
console.log(result)

// >> another way
// >> function expression
const add2 = function add2(first, second) {
    const total = first + second
    return first + second
}

const result2= add2(5, 7)
console.log(result2)

// >>another another way
// >> function expression (anonymus function expression)
const add3 = function (first, second){
    const total = first + second
    return total
}

const result3= add3(5, 7)
console.log(result3)

// >> another way
const add4 = function (first, second){
    return first + second
}

const result4= add4(5, 7)
console.log(result4)

// >> other way " => "
// >> arrow function
const add6 = (first, second) => first + second

const result6= add6(5, 68)
console.log(result6)

// ! interview questions : difference between
// # function declaration
// # function expression
// # arrow function 