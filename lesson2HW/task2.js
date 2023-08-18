//task 2(логічні розгалуження)

//task 2.1
x= +prompt('Введіть будь-яке число')
if (x>0){
    console.log('Вірно')
}
else {
    console.log('Невірно')
}

//task 2.2
time1=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
time2=[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
time3=[31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]
time4=[46,47,48,49,50,51,52,53,54,55,56,57,58,59]
time= +prompt('Введіть хвилину від 0 до 59')
if (time<=time1){
    console.log('Перша чверть')
}

else if (time1<time<=time2){
    console.log('Друга чверть')
}
else if (time2<time<=time3){
    console.log('Третя чверть')
}
else if (time3<time<=time4){
    console.log('Четверта чверть')
}
else if (time<=0){
    console.log('Введено некоректну хвилину')
}

//task 2.3
decade1=[1,2,3,4,5,6,7,8,9,10,11]
decade2=[11,12,13,14,15,16,17,18,19,20,21]
decade3=[22,23,24,25,26,27,28,29,31]
day= +prompt('Введіть дату місяця від 1 до 31')
if (day<=decade1){
    console.log('Перша декада')
}
else if (decade1<day<=decade2){
    console.log('Друга декада')
}
else if (decade2<day<=decade3){
    console.log('Третя декада')
}
else if (day<=0){
    console.log('Введено некоректну дату місяця')
}
//task 2.4
numberDay=prompt('Введіть порядковий номер дня тижня(1-понеділок,7-неділя)')
switch (numberDay){

    case '1':
        console.log('Monday')
        break;

    case '2':
        console.log('Tuesday')
        break;

    case '3':
        console.log('Wednesday')
        break;

    case '4':
        console.log('Thursday')
        break;

    case '5':
        console.log('Friday')
        break;

    case '6':
        console.log('Saturday')
        break;

    case '7':
        console.log('Sunday')
        break;

    default:
        console.log('Введено некоректний порядковий номер дня тижня')
}
//task 2.5

x1= +prompt('Введіть перше число(x1) для порівння')
x2= +prompt('Введіть друге число(x2) для порівняння')

if (x1>x2){
    console.log('x1 більше за x2')
}
else if (x2>x1){
    console.log('x2 більше за x1')
}
else if (x1===x2){
    console.log('Числа однакові')
}