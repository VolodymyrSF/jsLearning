// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i=0;i<10;i++){
    document.write(`<div>Hello</div>`)
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let a=0;a<10;a++){
    document.write(`<div> Hello : ${a}</div>`)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let b=0
while (b<20){
    document.write(`<h1> Okten</h1>`)
    b++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let c=0
while (c<20){
    document.write(`<h1> Okten : ${c}</h1>`)
    c++
}