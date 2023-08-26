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

//9
let a=[2,17,13,6,22,31,45,66,100,-18];
//1
let g=a.length-1
while (g>=0){
    document.write(`<div>${a[g]}</div>`)
    g--
}
document.write(`<div>-------------------------</div>`)
//2
for (h=a.length-1;h>=0;h--){
    document.write(`<div>${a[h]}</div>`)
}
document.write(`<div>-------------------------</div>`)

//3

let i=a.length-1
while (i>=0){
    if (i%2!==0){
        if (i>0){
            document.write(`<div>${i}</div>`)
        }
    }
    i--
}

document.write(`<div>-------------------------</div>`)
//4
for (let x=a.length-1;x>=0;x--){
    if (x%2!==0){
        document.write(`<div>${x}</div>`)
    }
}
document.write(`<div>-------------------------</div>`)
//5
let y=a.length-1
while (y>=0){
    if (y%2===0){
        if (y>0){
            document.write(`<div>${y}</div>`)
        }
    }
    y--
}
document.write(`<div>-------------------------</div>`)
//6
for (let z=a.length-1;z>=0;z--){
    if (z%2===0){
        document.write(`<div>${z}</div>`)
    }
}
document.write(`<div>-------------------------</div>`)
//7
let d=a.length-1
while (d>=0){
    if (a[d]%2!==0){
        document.write(`<div>${a[d]}= Okten</div>`)
    }
    d--
}
document.write(`<div>-------------------------</div>`)
