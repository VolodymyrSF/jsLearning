// - створити функцію яка приймає масив та виводить кожен його елемент
let abc = [1, 4, 6, true, 'asffdfd', false]

function logArray(array) {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }

}

logArray(abc)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(string) {
    document.write(`<p>${string}</p>`)
}

createParagraph('asadfafdfa')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList(text) {
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>

    </ul>`)
}

createList('safdsfsds')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createList2(number, text) {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {

        document.write(`<li>${text}</li>`)
    }
    document.write (`</ul>`)
}
createList2(5, 'hey')
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список



function createListAllType(array) {
    let arrayAllType=Array.from(arguments)
    document.write(`<ul>`)
    for (const arrayElement of arrayAllType) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)

}

createListAllType(1,'fdfsd',true,false,'sdasd')


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id: 11}
];
function listUsers(array) {
    document.write(`<ul>`)
    document.write(`<div>`)
    for (const user of users) {
        document.write(`<li>user_id: ${user.id},<br>user_name: ${user.name},<br>user_age: ${user.age}</li>`)

    }
    document.write(`</div>`)

}
listUsers(users)


//- створити функцію яка повертає найменьше число з масиву
function smallest_number(array) {
    let massivNumber=Array.from(arguments)
    let min=massivNumber[0]
    for (const number of massivNumber) {
        if (number<min) min=number
    }
return min
}
let smalnum=smallest_number(1,2,5,-6,7,8,10)
console.log(smalnum)


//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
function calcSum(array) {
    let sumArr=Array.from(arguments)
    let result=0
    for (m=0;m<sumArr.length;m++){
        result=result+sumArr[m]
    }

    return result
}
let sum= calcSum(0,2,4,7,6)
console.log(sum)
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(index1,index2,...swapArr) {
    for (let element of swapArr) {
        let copyIndex1=swapArr[index1]
       swapArr[index1]=(swapArr[index1]-swapArr[index1])+swapArr[index2]

       swapArr[index2]=(swapArr[index2]-swapArr[index2])+copyIndex1
       return swapArr
    }


}
let InSwap=swap(0,5,12,222,14,121,243,211)
console.log(InSwap)

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// function exchange(sumUAH,currencyValuesUSD,currencyValuesEUR,exchangeCurrency) {
//     document.write(`Ваша сума для обміну:${sumUAH},Курс долара:${currencyValuesUSD},Курс євро:${currencyValuesEUR},Валюта для обміну:${exchangeCurrency}`)
//     let exchangeArray=Array.from(arguments)
//     let exchResultUSD=sumUAH/currencyValuesUSD
//     let exchResultEUR=sumUAH/currencyValuesEUR
//         switch (exchangeCurrency) {
//             case 'USD':
//             return exchResultUSD
//
//             case 'EUR':
//                 return exchResultEUR
//         }
//
// }
//
// let ex=exchange(10000,40,42,'EUR')
// document.write(` Результат обміну:${ex}`)
let exchangeValuta=[
    {name:'USD', value:40},
    {name:'EUR', value:50},
    {name:'DEU', value:25}
]
function exchange(sumUAH,currencyValue,exchangeCurrency) {
    for (const valuta of exchangeValuta) {
        if (valuta.name===exchangeCurrency)
            return `${sumUAH/valuta.value}`
    }
    return `Wrong exchange name`
 }
 let resultExchange=exchange(10000,exchangeValuta,'EUR')
document.write(` Результат обміну:${resultExchange}` )
