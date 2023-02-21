// const add = (first, second) => first + second

const fullName = (first, last) => first + ' ' + last;

const name= fullName('mk', 'saadi')
console.log(name)


// >> no parameter arrow function
const getPi= () => 3.14

console.log(getPi())

// >> single parameter
// >> using brackets in single parameter isnt required but optional
// * const getPi1= (num) => num * 3.14

const getPi1 = num => num * 3.14

console.log(getPi1(5))

// >> multi-line arrow function
// >> using "return" is mandatory
const doMath= (x, y, z) => {
    const firstSum= x + y
    const secondSum= z + z
    const multiplyResult=  firstSum * secondSum
    const result = multiplyResult / 2
    return result
}
console.log(doMath(10, 3, 4))