// Array of available subjects. //
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugês",
    "Química"
];
// Array of Weekdays. //
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

// this function takes the index of the subject and return his name //
function getSubject(subjectNumber) {
    const position = +subjectNumber -1;
    return subjects[position];
}

// convert hours to minutes function. // 
function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":");
    return Number(( hour * 60 ) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
};