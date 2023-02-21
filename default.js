// >> jodi function er 'second' er mann deya na thake tahole 'default' ekta maan '0 (jekono ekta number deya jabe)' function er vitorei deya jabe 'second= 0'
function add(first, second= 0) {
    const total = first + second
    return total
}

// >> ekhane jodi 'second' er maan deya na thake
const result= add(57)
console.log(result)


// >> eikhane fullName er vitore ja thakbe seta "(parameters)"
function fullName(firstName= 'mk', lastName= 'saadi') {
    const name= firstName+ ' '+ lastName;
    return name
}

// >> eikhane fullName er vitore ja thakbe seta "(arguments)"
const allName= fullName()
console.log(allName)