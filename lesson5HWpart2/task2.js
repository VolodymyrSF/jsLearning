// - створити функцію яка приймає масив та виводить кожен його елемент
let abc = [1, 4, 6, true, 'asffdfd', false]

let logArray=(array) =>{
    for (const arrayElement of array) {
        console.log(arrayElement)
    }

}
logArray(abc)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createParagraph=(string) =>{
    document.write(`<p>${string}</p>`)
}

createParagraph('asadfafdfa')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createList=(text)=> {
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>

    </ul>`)
}

createList('Lishka')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createList2=(number, text)=> {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {

        document.write(`<li>${text}</li>`)
    }
    document.write (`</ul>`)
}
createList2(10, 'Tut mae buti text')
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


let arrayAllType=[1,'string',false,22,'number','mumber',true]
let createListAllType=(array)=> {
    document.write(`<ul>`)
    for (const arrayElement of arrayAllType) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)

}

createListAllType(arrayAllType)


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
let listUsers=()=> {
    document.write(`<ul>`)
    document.write(`<div>`)
    for (const user of users) {
        document.write(`<li>user_id: ${user.id},<br>user_name: ${user.name},<br>user_age: ${user.age}</li> <br>`)

    }
    document.write(`</div>`)

}
listUsers(users)


//- створити функцію яка повертає найменьше число з масиву
let massivNumber=[1,-2,5,-6,7,8,-10]
let smallest_number=()=> {
    let min=massivNumber[0]
    for (const number of massivNumber) {
        if (number<min) min=number
    }
    return min
}
console.log(`Найменше число масиву:${smallest_number(massivNumber)}`)


//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
sumArr=[0,2,4,7,6]
let calcSum=()=> {
    let result=0
    for (m=0;m<sumArr.length;m++){
        result=result+sumArr[m]
    }

    return result
}
console.log(`Сума масиву:${calcSum(sumArr)}`)
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swapArr=[1,45,65,22,76,9]
let swap=(index1,index2,array)=>{
    for (let n=0;n<swapArr.length;n++) {
        let a1=swapArr[index1]
        swapArr[index1]=swapArr[index2]
        swapArr[index2]=a1
        return swapArr
    }
}

console.log(swap(1,4,swapArr))
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchangeValuta=[
    {name:'USD', value:40},
    {name:'EUR', value:50},
    {name:'DEU', value:25}
]
let exchange=(sumUAH,currencyValue,exchangeCurrency) =>{
    for (const valuta of exchangeValuta) {
        if (valuta.name===exchangeCurrency)
            return `${sumUAH/valuta.value}`
    }
    return `Wrong exchange name`
}
let resultExchange=exchange(10000,exchangeValuta,'EUR')
document.write(`Результат обміну:${resultExchange}` )
