const student = {
    name: "Bob",
    age: 30,
    friends: ["Alex", "Donald"]
}

const studentPlus = student
studentPlus.name = "Ira"
console.log(student)

/*
const keys = Object.keys(student)
console.log(keys)

const copyStudent = {}
for (i = 0; i < keys.length; i++) {
    copyStudent[keys[i]] = student[keys[i]]
}
console.log(copyStudent)*/

const copyStudent = {...student}
console.log(copyStudent)

const num = [1,2,3]
const copyNum = [...num]
console.log(copyNum)

const deepCopyStudent = {
    ...student,
    friends: [...student.friends]
}
deepCopyStudent.friends.push("Howard")
console.log(student)
console.log(deepCopyStudent)

// Map
const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: "Michel",
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]

// const getStudentNames = s => s.name
function getStudentNames (st, i) {
    return `Student ${i}: ${st.name} is ${st.age} years old`
}

const names = students.map(getStudentNames)
console.log(names)