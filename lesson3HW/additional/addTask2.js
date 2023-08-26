// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrNum=[1,2,3,4,5,6,7,8,9,10];
for (let i=0;i<arrNum.length;i++){
    console.log(arrNum[i])
}
console.log('--------------------------------------')
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arrStr=['a','b','c','d','e','f','g','q','w','e'];
for (let b = 0; b < arrStr.length; b++) {
    console.log(arrStr[b])
}
console.log('--------------------------------------')
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrAll=[1,'a',true,2,3,4,5,'all',false,10]
for (let c=0;c<arrAll.length;c++){
    console.log(arrAll[c])
}
 console.log('-------------------------------------')
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arrBool=[true,'a',true,2,3,false,5,'all',false,10]
for (let z=0;z<arrBool.length;z++){
    if (typeof arrBool[z]==="boolean")
        console.log(`${arrBool[z]}`)
}
console.log('--------------------------------------------')
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arrNumber=[1,3,6,false,'a',true,'b',5,'dfd',3];
for (let m=0;m<arrNumber.length;m++){
    if (typeof arrNumber[m]==="number")
        console.log(`${arrNumber[m]}`)
}
console.log('----------------------------------------------')
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arrString=[3,'str',4,true,6,'aqwe',4,false,7,'nine']
for (let o=0;o<arrString.length;o++){
    if (typeof arrString[o]==="string")
        console.log(`${arrString[o]}`)
}