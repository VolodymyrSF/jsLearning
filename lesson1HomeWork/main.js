//task1
let s1='hello';
let s2 ='owu';
let s3='com';
let s4='ua';
let n1=1;
let n2=10;
let n3=-999;
let n4=123;
let n5=3.14;
let n6=2.7;
let n7=16;
let b1=true;
let b2=false;
console.log(s1,s2,s3,s4);
console.log(n1,n2,n3,n4,n5,n6,n7);
console.log(b1,b2);
//task2
let firstName='Safianyk';
let middleName='Volodymyr';
let lastName='Hryhorovych';
let person=`${firstName} ${middleName} ${lastName};`
console.log(person);
//task3
let a=100
let b='100'
let c=true
console.log(typeof a,a)
console.log(typeof b,b)
console.log(typeof c,c)
//additional task
let nameFirst= prompt('enter your first name');
if (!!!nameFirst){
    alert('No, it does not work like that :) Please enter your first name')
     nameFirst= prompt('enter your first name');
}
console.log(nameFirst);
let nameMiddle=prompt('enter your middle name');
if (!!!nameMiddle){
    alert('No, it does not work like that :) Please enter your middle name')
    nameFirst= prompt('enter your middle name');
}
console.log(nameMiddle);
let nameLast=prompt('enter your last name');
if (!!!nameLast){
    alert('No, it does not work like that :) Please enter your last name')
    nameFirst= prompt('enter your last name');
}
console.log(nameLast)
let age=+prompt('enter your age')
console.log(typeof age,age)