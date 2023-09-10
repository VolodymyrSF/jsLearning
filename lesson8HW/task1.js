// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id,name,surname,email,phone) {
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}
let user1=new User(1,'vasya','pupkin','pupkin@gmail','777')
console.log(user1)
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users=[
    new User(1,'aaa','ABB','ABB@gmail','111'),
    new User(2,'bbb','ACC','ACC@gmail','222'),
    new User(3,'ccc','BBC','BBC@gmail','333'),
    new User(4,'ddd','CCD','CCD@gmail','444'),
    new User(5,'eee','EED','EED@gmail','555'),
    new User(6,'ggg','QQW','QQW@gmail','666'),
    new User(7,'qqq','WWE','WWE@gmail','777'),
    new User(8,'www','GGF','GGF@gmail','888'),
    new User(9,'eee','TTR','TTR@gmail','999'),
    new User(10,'ttt','MMD','MMD@gmail','100')
]
console.log(users)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
users.filter(value => {
    if (value.id%2===0){
        console.log(value)
    }
})
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let usersSorted=users.sort((a, b) => {
    return a.id-b.id
})
console.log(usersSorted)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order=order;
    }
}

let client1=new Client(1,'a','b','@gmail','111',['tovar','tovar'])
console.log(client1)
// створити пустий масив, наповнити його 10 об'єктами Client
let clients=[
    new Client(1,'a','b','a@gmail','1',['tovar','tovar']),
    new Client(2,'s','d','s@gmail','2',['tovar']),
    new Client(3,'d','f','d@gmail','3',['tovar','tovar','tovar']),
    new Client(4,'g','h','g@gmail','4',['tovar']),
    new Client(5,'j','k','j@gmail','5',['tovar','tovar','tovar','tovar']),
    new Client(6,'z','x','z@gmail','6',['tovar','tovar']),
    new Client(7,'c','v','c@gmail','7',['tovar','tovar','tovar']),
    new Client(8,'b','a','b@gmail','8',['tovar']),
    new Client(9,'d','s','d@gmail','9',['tovar','tovar']),
    new Client(10,'k','z','k@gmail','10',['tovar','tovar','tovar'])
]
console.log(clients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sorterClients=clients.sort((a, b) => {
    return a.order.length-b.order.length
})
console.log(sorterClients)
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model,producer,year,maxspeed,engineCapacity) {
    this.model=model;
    this.producer=producer;
    this.year=year;
    this.maxspeed=maxspeed;
    this.engineCapacity=engineCapacity;
    this.driver=null
    Car.prototype.drive=function () {
        return`їдемо зі швидкістю ${this.maxspeed} на годину`
    }
    Car.prototype.info=function () {
        return `модель-${this.model}, виробник-${this.producer}, рік випуску-${this.year}, максимальна швидкість-${this.maxspeed}, об'єм двигуна-${this.engineCapacity}`

    }
    Car.prototype.increaseMaxSpeed=function (newSpeed){
        return this.maxspeed=newSpeed
    }
    Car.prototype.changeYear=function (newYear){
        this.year=newYear
    }
Car.prototype.addDriver=function (name){
    this.driver=name
    return `Водій ${this.driver}`
}
}

let car1=new Car('v50','volvo','2012','240','1600 cub')
console.log(car1.addDriver('vasya'))
console.log(car1.drive())
console.log(car1.info())
car1.increaseMaxSpeed(260)
console.log(car1.info())
car1.changeYear(2015)
console.log(car1.info())
console.log(car1)

//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class car{
    constructor(model, producer, year, maxspeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engineCapacity = engineCapacity;
        this.driver=null;
    }
    drive(){
        console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`)
}
info(){
return`модель-${this.model}, виробник-${this.producer}, рік випуску-${this.year}, максимальна швидкість-${this.maxspeed}, об'єм двигуна-${this.engineCapacity}`
}
    increaseMaxSpeed (newSpeed){
        this.maxspeed=newSpeed
        console.log(`Нова максимальна швидкість=${this.maxspeed}`)
    }
    changeYear(newYear){
        this.year=newYear
        console.log(`Новий рік випуску=${this.year}`)
    }
    addDriver(name,age){
        this.driver={name,age};
        return `Водій з іменем ${name} та віком ${age}`

    }
}
let avtomobil=new car('v50','volvo','2012','240','1600 cub')
avtomobil.drive()
console.log(avtomobil.info())
avtomobil.increaseMaxSpeed(300)
avtomobil.changeYear(2030)
console.log(avtomobil.addDriver('Vasya','33'))
console.log(avtomobil)
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class popeliushka{
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }

}
let popeliushki=[
    popeliushka1=new popeliushka('Veronika','19','38'),
    popeliushka2=new popeliushka('Karolina','21','36'),
    popeliushka3=new popeliushka('Ilona','30','37'),
    popeliushka4=new popeliushka('Olya','18','39'),
    popeliushka5=new popeliushka('Katerina','23','42'),
    popeliushka6=new popeliushka('Natalia','24','37'),
    popeliushka7=new popeliushka('Yaruna','45','35'),
    popeliushka8=new popeliushka('Olena','26','45'),
    popeliushka9=new popeliushka('Oksana','19','43'),
    popeliushka10=new popeliushka('Vira','25','37'),
]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class princ{
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
princWilliam=new princ('William','22','45')
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
function popeliushkaFind(array) {
    for (let item of array) {
        if (item.footsize === princWilliam.shoe) {
            return `Попелюшку,яка повинна бути з принцом звати ${item.name}`
        }
    }
}

console.log(popeliushkaFind(popeliushki))
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
popeliushki.find(value => {
    if (value.footsize===princWilliam.shoe){
        console.log(`Ім'я попелюшки,яка повинна бути з принцом ${value.name}`)
    }
})
