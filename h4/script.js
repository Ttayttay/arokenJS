console.log('Четные числа от 1 до 12')

for (i = 1; i <= 12; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

console.log('Обратный отсчет:')

for (i = 10; i > 0; i--){
    console.log(i)
}

console.log('Четные числа от 1 до 12 через цикл while')

var i =  1

while (i <= 12) {
    if (i % 2 == 0) {
        console.log(i)
    }
    i++
}

console.log('Обратный отсчет через цикл while')

var i = 10

while (i > 0){
    console.log(i)
    i--
}