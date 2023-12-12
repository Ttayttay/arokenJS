console.log('Функция приветствия')


function hello(name) {
    return `Hello ${name}`
}

console.log(hello('Alex'))
console.log()

console.log('Числа больше 10')

function findNumber(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        }
    }
    return
}


const numbers = [12, 1, 43, 'Seth', 32, 2, 5, 45, 6, 87, 1]

findNumber(numbers)
console.log()

console.log('Калькулятор')

function calculator(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            console.log(firstNumber + secondNumber)
            return
        case '-':
            console.log(firstNumber - secondNumber)
            return
        case '*':
            console.log(firstNumber * secondNumber)
            return
        case '/':
            if (secondNumber === 0) {
                console.log('Ошибка! На ноль делить нельзя!')
                return 0
            }
            console.log(firstNumber / secondNumber)
            return
    }
}

calculator(2, 2, '/')
