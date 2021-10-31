const todolistsID_1 = 'dsaf98dflk'
const todolistsID_2 = 'asdfj8dflk'


const todolists = [
    {
        id: todolistsID_1,
        title: 'What to do',
        filter: 'All'
    },
    {
        id: todolistsID_2,
        title: 'What to buy',
        filter: 'All'
    }
]

const tasks = {
    [todolistsID_1]: [
        {name: 'HTML', isDone: true},
        {name: 'CSS', isDone: false},
        {name: 'JS', isDone: false}
    ],
    [todolistsID_2]: [
        {name: 'Bread', isDone: true},
        {name: 'Butter', isDone: true},
        {name: 'Milk', isDone: false}
    ]
}

// В консоли показано как можно обращаться к элементам.
// console.log(tasks[todolistsID_1][1].name)

// так можно использовать методы массивов:
// console.log(tasks[todolistsID_2].find(f=>!f.isDone))

// можно также, например, искать объекты по всем таскам сразу:
/*
for (let dr in tasks) {
    console.log(tasks[dr].find(f => f.name === "Bread"))
}*/

// можно организовать поиск с использованием функции

/*
function findNames (nameToFind) {
    let massNames = {
        result: []
    }
    for (let prop in tasks) {
        let task = tasks[prop].find(f => f.name === nameToFind)
        if (task) massNames.result.push(task)
    }
    return massNames
}

console.log(findNames("Milk"))*/

// reduce

/*let arr = [21, 66, 79, 34]
// summ
console.log(arr.reduce((acc, el) => acc + el, 0))
// biggest #
console.log(arr.reduce((acc, el) => acc > el ? acc : el))*/

// работа с массивом

let students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100
    }
]

// sum of scores
/*
console.log(students.reduce((acc, el) => acc + el.scores, 0))*/

// with third parameter
/*
console.log(students.reduce((acc, el, i) => {
    if (!(i % 2)) {
        return acc + el.scores
    }
    return acc
    }, 0))*/

// find students with 100+ scores
/*console.log(students.reduce((acc, el) => {
    if (el.scores >= 100) {
        acc.push(el)
        return acc
    }
    return acc
}, []))*/

// add parameter isStudent. true if score >= 100, false if score < 100
console.log(students.reduce((acc, el) => [...acc, {...el, isStudent: el.scores >= 100}], []))