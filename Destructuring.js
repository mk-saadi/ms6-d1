const bestGirl= {
    name: 'Emi ',
    age: 17,
    gender: 'Female',
    eyeColor: 'Dark Violet',
    hairColor: 'Dark Violet',
    favoriteColor: 'Skyblue',
    intelligence: 7/10,
    status: 'Student, Leader',
    country: 'Bangladesh',
    rece: 'Asian',
    ability: 'Speed',
    mana: 6/10,
    strength: '???',
    defense: 9.5/10 + 3/10,
    charisma: 9.5/10,
}

// >> one way to get the info
// const name= bestGirl.name
// const age= bestGirl.age

// >> another way to get the info
const {charisma}= bestGirl
console.log(charisma)


const {age, ability}= {
    name:'Tithi', 
    age:28, 
    gender: 'Female',
    eyeColor: 'White',
    hairColor: 'Grayish White',
    profession: 'Teacher',
    country: 'Bangladesh',
    ability: 'Space Manipulation',
}
console.log(age, ability)


// >> array Destructuring
// >> will maintain order of elements, last 3 numbers wont show
// const [first, last]= [54, 698, 165, 166, 195]
// console.log(first, last)

// const waifus= ['rin', 'sakura', 'saber']
// const [tsundere, yandere, bestdere]= waifus
// console.log(bestdere)


// let besto= 'rin rin'
// console.log("%c Condition block ::" + besto , 'color:green')