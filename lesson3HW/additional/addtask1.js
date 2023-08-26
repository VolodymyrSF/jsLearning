// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let a=[2,17,13,6,22,31,45,66,100,-18];
//1
let g=0
while (g<a.length){
    document.write(`<div>${a[g]}</div>`)
    g++
}
document.write(`<div>-------------------------</div>`)
//2
for (h=0;h<a.length;h++){
    document.write(`<div>${a[h]}</div>`)
}
document.write(`<div>-------------------------</div>`)

//3

let i=0
while (i<a.length){
    if (i%2!==0){
        if (i>0){
document.write(`<div>${i}</div>`)
    }
    }
    i++
}

document.write(`<div>-------------------------</div>`)
//4
for (let x=1;x<a.length;x++){
    if (x%2!==0){
        document.write(`<div>${x}</div>`)
    }
}
document.write(`<div>-------------------------</div>`)
//5
let y=0
while (y<a.length){
    if (y%2===0){
        if (y>0){
            document.write(`<div>${y}</div>`)
        }
    }
    y++
}
document.write(`<div>-------------------------</div>`)
//6
for (let z=1;z<a.length;z++){
    if (z%2===0){
        document.write(`<div>${z}</div>`)
    }
}
document.write(`<div>-------------------------</div>`)
//7
let d=0
while (d<a.length){
    if (a[d]%2!==0){
        document.write(`<div>${a[d]}= Okten</div>`)
    }
    d++
}
document.write(`<div>-------------------------</div>`)
//8
for (let f=a.length-1; f>=0; f--){
    document.write(`<div>${a[f]}</div>`)
}
