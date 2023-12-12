console.log ('Четные числа в массиве')

let m = [2, 634, 2345, 34, 65, 1234, 76, 45, 34, 76, 756, 33, 5]

for(i = 0; i <= m.length; i++) {
    if(m[i] % 2 == 0){
        console.log(m[i])
    }
}

console.log ('Радуга')

let rainbow = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple']

for (i = rainbow.length; i > 0; i--){
    console.log(rainbow[i - 1])
}
