// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

let books=[

    {title:'Book1wdw',
    pages:576,
    authors:['sadfsdfds', 'afadfdafa' ,'aasfafafa', 'afdadga'],
    genre:'dgsfgfdd'
    },

    {title:'Book22334',
        pages:325,
        authors:['sadfsdfds', 'afadfdafa' , 'afdadga'],
        genre:['dgsfgfdd','sdaasdfa','safafd']
    },

    {title:'Book31234235678675432',
        pages:276,
        authors:['sadfsdfds'],
        genre:['dgsfgfdd','saSSADSDAS']
    },

    {title:'Book412132',
        pages:980,
        authors:['sadfsdfds', 'afadfdafa'],
        genre:['ertyuio','cvbnm','tyujmnbvfr','jdnkfjedhwji']
    }
]
console.log(books[0].title.length)
console.log(books[2].title.length)

// -знайти наібльшу книжку.
let max=books[0].pages
for (let i=0;i<books.length;i++)
    if (books[i].pages>max) max=books[i].pages
console.log(max)
// - знайти книжку/ки з найбільшою кількістю жанрів
let maxg=books[0].genre
for (let a=0;a<books.length;a++)
    if (books[a].genre>maxg) maxg=books[a].title
console.log(maxg)
// - знайти книжку/ки з найдовшою назвою
let  maxtitle=books[0].title
for (let xz=0;xz<books.length;xz++) {
    if (books[xz].title.length > maxtitle.length) maxtitle = books[xz].title
}
    console.log(maxtitle)

// - знайти книжку/ки які писали 2 автори
for (let j=0;j<books.length;j++){
    if (books[j].authors.length===2)
        console.log(books[j].title)
}
// - знайти книжку/ки які писав 1 автор
for (let k=0;k<books.length;k++){
    if (books[k].authors.length===1)
        console.log(books[k].title)
}