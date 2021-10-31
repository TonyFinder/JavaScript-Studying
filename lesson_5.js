// Сортировка массива

//№1. Мой вариант сортировки
/*
const array = [20, 50, 70, 10, 60, 30, 18, 40, 5]

const sort = () => {
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] < array[i]) {
            let a = array[i]
            array[i] = array[i + 1]
            array[i + 1] = a
            i = -1
        }
    }
}

sort(array)
console.log(array)*/

//Первый способ можно переделать, чтобы избавиться от лишней переменной.
const array = [20, 50, 70, 10, 60, 30, 18, 40, 5]

const sort = () => {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] < array[i]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
            i = -1
        }
    }
}

sort(array)
console.log(array)


//№2. Вариант на уроке

/*
const array = [20, 50, 70, 10, 60, 30, 18, 40, 5]

const sort = (array) => {
    let result = []
    const len = array.length

    for (let j = 0; j < len; j++) {
        let max = array[0]
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i]
            }
        }
        result.unshift(...array.splice(array.indexOf(max),1))
    }
    return result
}

console.log(sort(array))*/

//№3. Вариант на уроке при помощи фильтра

/*
let array = [20, 50, 70, 10, 60, 30, 18, 40, 5]

const sortFilter = () => {
    let result = []
    const len = array.length

    for (let j = 0; j < len; j++) {
        let max = array[0]
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i]
            }
        }
        array = array.filter(f => f !== max)
        result.unshift(max)
    }
    return result
}

console.log(sortFilter(array))
*/

//#4 Можно использовать Math.max для поиска максимального значения

/*let array = [20, 50, 70, 10, 60, 30, 18, 40, 5]

const sortMathMax = () => {
    let result = []
    const len = array.length

    for (let j = 0; j < len; j++) {
        result.unshift(...array.splice(array.indexOf(Math.max(...array)),1))
        }
    return result
}

console.log(sortMathMax(array))*/

//#5 Можно рефакторить пример 4 вот так:

/*
let array = [20, 50, 70, 10, 60, 30, 18, 40, 5]

const sortMathMax = () => {
    let result = []
    while (array.length) result.unshift(...array.splice(array.indexOf(Math.max(...array)), 1))
    return result
}

console.log(sortMathMax(array))*/
