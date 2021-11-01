const students = [
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
        scores: 90,
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
    },
    {
        name: 'Helen',
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: 'Ann',
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: 'Bob',
    age: 23,
    friends: ['Alex', 'Nick', 'John']
}

//1. Создайте поверхностную копию объекта user
// Эта копия не делает клонирование вложенных массивов!
let copyUser = {...user};

//Проверка:
console.log(`${'1.'} ${user === copyUser}`)
console.log(`${'1.'} ${user.friends === copyUser.friends}`)

//2. Полная (глубокая) копия объекта user
//Здесь мы клонируем также вложенный массив, а не ссылку на него
let deepCopyUser = {
    ...user,
    friends: [...user.friends]
};

//Проверка:
console.log(`${'2.'} ${user === deepCopyUser}`)
console.log(`${'2.'} ${user.friends === deepCopyUser.friends}`)

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
console.log(`${'3.'} ${copyStudents === students}`)
console.log(`${'3.'} ${copyStudents[1] === students[1]}`)

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(m => ({...m}));

//Проверка:
console.log(`${'4.'} ${deepCopyStudents === students}`)
console.log(`${'4.'} ${deepCopyStudents[1] === students[1]}`)

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте deepCopyStudents по алфавиту (sort)
let sortByName = [...deepCopyStudents].sort((a, b) => a.name > b.name ? 1 : -1)
console.log('5.')
console.log(sortByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortByScores = [...deepCopyStudents].sort((a, b) => a.scores < b.scores ? 1 : -1);
console.log('5a.')
console.log(sortByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = students.filter(f => f.scores > 99);
console.log('6.')
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.sort((a, b) => a.scores < b.scores ? 1 : -1).splice(0, 3)
console.log('6a.')
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents]
console.log('6b.')
console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = newDeepCopyStudents.filter(f => !f.isMarried);
console.log('7.')
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = newDeepCopyStudents.map(m => m.name);
console.log('8.')
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = studentsNames.join(' ');
console.log(`${'8a.'} ${nameWithSpace}`)
let namesWithComma = studentsNames.join(',');
console.log(`${'8a.'} ${namesWithComma}`)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(m => ({...m, isStudent: true}));
console.log('9.')
console.log(trueStudents)

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(m => m.name === 'Nick' ? {...m, isMarried: true} : m);
console.log('10.')
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.find(f => f.name === 'Ann');
console.log('11.')
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// Закоментировал свой способ :-)
/*let bestStudent = students.find(f => f.scores === students.reduce((acc, el) => el.scores > acc ? acc = el.scores : acc, 0));*/
let bestStudent = students.reduce((acc, el) => el.scores > acc.scores ? el : acc)
console.log('12.')
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = students.reduce((acc, el) => acc + el.scores, 0);
console.log('13.')
console.log(scoresSum)

// Д.З.:
// 14.Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    //Мой первый вариант
    // let studentName = students.reduce((acc, el) => [...acc, el.name], [])
    // return students.map(m => ({...m, friends: studentName.filter(f => f !== m.name)}))

    //Второй вариант
    return students
        .map(m => ({...m, friends: students
                .map(m => m.name)
                .filter(f => f !== m.name)}))
}
console.log('14.')
console.log(addFriends(students));