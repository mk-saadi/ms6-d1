// >> use back tick ``

const a= 54;
const b= 51;
// >> dont write it this way
// const summary= 'sum of: '+ a+ ' and '+ b+ ' is: '+ (a+b)

// >> write it this way
const summary= `sum of: a(${a}) and b(${b}) is: ${a+b}`
console.log(summary)