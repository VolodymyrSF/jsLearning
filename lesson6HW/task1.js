// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1='hello world'
console.log(str1.length)
let str2='lorem ipsum'
console.log(str2.length)
let str3='javascript is cool'
console.log(str3.length)
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase());
console.log(str2.toUpperCase())
console.log(str3.toUpperCase())
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
STR1='HELLO WORLD'
STR2='LOREM IPSUM'
STR3='JAVASCRIPT IS COOL'
console.log(STR1.toLowerCase())
console.log(STR2.toLowerCase())
console.log(STR3.toLowerCase())
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyString='dirty string'
console.log(dirtyString.replaceAll(' ', ''));
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let volu='Ревуть воли як ясла повні';
let stringToArray=volu.split(' ')
console.log(stringToArray)
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let chysla=[10,8,-7,55,987,-1011,0,1050,0]
let chyslaString=chysla.map(value => value.toString())
console.log(chyslaString)
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
function sortNums(array,type) {
    if (type === 'ascending')
        return array.sort((a, b) => a-b)
    else if (type === 'descending')
        return array.sort((a, b) => b-a)
}
console.log(sortNums(nums,'descending'))
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortMonth=coursesAndDurationArray.sort((a, b) =>{
    return b.monthDuration-a.monthDuration
})
console.log(sortMonth)

let filtrCourses=coursesAndDurationArray.filter(value => value.monthDuration>5)
console.log(filtrCourses)

coursesAndDurationArray.map(value => value.id=1)
console.log(coursesAndDurationArray)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
const deck = [
    {cardSuit: 'spade', value : '6', color : 'black'},
    {cardSuit: 'spade', value : '7', color : 'black'},
    {cardSuit: 'spade', value : '8', color : 'black'},
    {cardSuit: 'spade', value : '9', color : 'black'},
    {cardSuit: 'spade', value : '10', color : 'black'},
    {cardSuit: 'spade', value : 'ace', color : 'black'},
    {cardSuit: 'spade', value : 'jack', color : 'black'},
    {cardSuit: 'spade', value : 'queen', color : 'black'},
    {cardSuit: 'spade', value : 'king', color : 'black'},
    {cardSuit: 'clubs', value : '6', color : 'black'},
    {cardSuit: 'clubs', value : '7', color : 'black'},
    {cardSuit: 'clubs', value : '8', color : 'black'},
    {cardSuit: 'clubs', value : '9', color : 'black'},
    {cardSuit: 'clubs', value : '10', color : 'black'},
    {cardSuit: 'clubs', value : 'ace', color : 'black'},
    {cardSuit: 'clubs', value : 'jack', color : 'black'},
    {cardSuit: 'clubs', value : 'queen', color : 'black'},
    {cardSuit: 'clubs', value : 'king', color : 'black'},
    {cardSuit: 'diamond', value : '6', color : 'red'},
    {cardSuit: 'diamond', value : '7', color : 'red'},
    {cardSuit: 'diamond', value : '8', color : 'red'},
    {cardSuit: 'diamond', value : '9', color : 'red'},
    {cardSuit: 'diamond', value : '10', color : 'red'},
    {cardSuit: 'diamond', value : 'ace', color : 'red'},
    {cardSuit: 'diamond', value : 'jack', color : 'red'},
    {cardSuit: 'diamond', value : 'queen', color : 'red'},
    {cardSuit: 'diamond', value : 'king', color : 'red'},
    {cardSuit: 'heart', value : '6', color : 'red'},
    {cardSuit: 'heart', value : '7', color : 'red'},
    {cardSuit: 'heart', value : '8', color : 'red'},
    {cardSuit: 'heart', value : '9', color : 'red'},
    {cardSuit: 'heart', value : '10', color : 'red'},
    {cardSuit: 'heart', value : 'jack', color : 'red'},
    {cardSuit: 'heart', value : 'queen', color : 'red'},
    {cardSuit: 'heart', value : 'ace', color : 'red'},
    {cardSuit: 'heart', value : 'king', color : 'red'},
];
//Піковий туз
console.log(deck.find(value => value.value==='ace'&&value.cardSuit==='spade'))
//Всі шістки
console.log(deck.filter(value => value.value==='6'))
//Всі червоні карти
console.log(deck.filter(value => value.color==='red'))
//всі буби
console.log(deck.filter(value => value.cardSuit==='diamond'))
//всі трефи від 9 та більше
console.log(deck.filter(value => value.cardSuit==='clubs'&&value.value>='9'))
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
    let reducer=deck.reduce(function (accumulator,card){
   switch (card.cardSuit){
       case 'spade':
           accumulator[0].push(card)
           break
       case 'clubs':
           accumulator[1].push(card)
           break
       case 'diamond':
           accumulator[2].push(card)
           break
       case 'heart':
           accumulator[3].push(card)
           break
   }
return accumulator}
        ,[[],[],[],[]])
console.log(reducer)
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(value => value.modules.includes('sass')))
console.log(coursesArray.filter(value => value.modules.includes('docker')))