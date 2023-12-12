const admin = {
    firstName: 'Andrew',
    lastName: 'Tabakov',
    age: 26,
} 

console.log(admin)
console.log()

const obj = {
    sayHello(name){
        console.log(`Hello ${name}`)
    }
}

obj.sayHello('Alex')
console.log()

const users = [
    {
        name: 'Ivan',
        sudo: false
    },
    {
        name: 'James',
        sudo: false
    },
    {
        name: 'Igor',
        sudo: true
    },
    {
        name: 'Admin',
        sudo: false
    },
    {
        name: 'Svetlana',
        sudo: true
    }
]

let count = 0 

for(i = 0; i < users.length; i++){
    if(users[i].sudo == false){
        count++
    }
}

console.log(count)

// function isAdmin(array) {
//     let count = 0
//     for(i = 0; i <= array.lengt; i++){
//         if(array[i].sudo == false){
//             count+1
//         }
//     }
//     console.log(count)
//     return
// }

// isAdmin(users)

