// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arrA=[]
let i=0
do {
    i++
    arrA[0]=1
    arrA[1]='str'
    arrA[2]=true
    arrA[3]=2
    arrA[4]=5
    arrA[5]=true
    arrA[6]='alt'
    arrA[7]='qwerty'
    arrA[8]=6
    arrA[9]=10
}
while (i<10)
console.log(arrA)
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let a=0;a<10;a++){
    console.log(`${a}`)

    document.write(`<div>${a}</div>`)
}

document.write('---------------------------------------')
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let b=0;b<100;b++){
    console.log(`${b}`)

    document.write(`<div>${b}</div> `)
}

document.write('---------------------------------------')
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let c=0;c<100;c=c+2){
    console.log(`${c}`)

    document.write(`<div>${c}</div> `)
}

document.write('---------------------------------------')
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let z=0;z<100;z++){
    if (z%2===0)
    console.log(`${z}`)
   if (z%2===0)
       document.write(`<div>${z}</div> `)
}

document.write('---------------------------------------')
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let z=0;z<100;z++){
    if (z%2!==0)
        console.log(`${z}`)
    if (z%2!==0)
        document.write(`<div>${z}</div> `)
}
