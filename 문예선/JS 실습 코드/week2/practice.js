/*
const str = "Hello world";

console.log(toUpperCase());
console.log(toLowerCase());

const str = '          game';
console.log(str.trim());

console.log(str,repeat(2));

console.log(str,padStart(10,'-'));

const str = '안녕하세요';
console.log(str.indexOf('안녕'));
console.log(str.includes('안녕'));
console.log(str.includes('사람'));
console.log(str.startWith('사람'));
console.log(str.endsWith('사람'));
console.log(str.replace('안녕','잘지'));
console.log(str.substring(0,3));

const str = '월, 화, 수';

console.log(str.split(','));
console.log(str.slice(1,3));


const arr = [1, 2, 3, 4];

arr.push(6);
arr.push(7,8);
arr.pop();

arr.unshift(10,20,30);

arr.shift();

funtion print(Number, index) {
    console.log(`${index} 위치의 요소 : ${number}`)
}
arr.forEach(print);

const newArr = arr.map((number, index) => number + 1);
console.log(newArr);

console.log(newArr. includes('1'));

console.log(newArr.findIndex((number) => nember >3));
arr.fill(10,1,2);
console.log(newArr. slice(2,4));
arr.splice(3,1, 222);
console.log(newArr. slice(2,4));
console.log(newArr. join());

const numbers = [123, 234]
console.log(numbers. concat(arr));

console.log(newArr.filter((number) => nember >3));

const reducer = (acc, value) => acc + value;
console.log(numbers. reduce(reducer), 6);


const obj = {
    x:1,
    y:2,
    z:3,

};

for (key in obj) {
    console.log(key);
};

const name = '문예선';
const country = 'KR';

const user = {
    name: name,
    country: country,

}
console.log(user);



const obj = {
    greeting: function () {
        console.log('Hi');
    },
};

obj.greeting();


const obj = {
    x:10,
    y:20,
    z:30,
}
console.log(Object.keys(obj));
console.log(Array.isArray(obj));
console.log(Object.entries(obj));


const arr = [1,2,3,4,5];
const [one, two] = arr;
console.log(one, two);

const obj = {
    x : 10,
    y: 20,
}
const {x: hello,y: world} = obj;
console.log(hello,world);

const obj = {
    one: {
        two: {
            three: 'bingo',
        },
    },
};

console.log(obj.one.two.three);

const bingo = obj.one.two.three;
console.log(bingo);


const obj = {
    x:10,
    y:20,
};

function sum(obj) {
    return obj.x+ obj.y;
}

console.log(sum(obj));

let a =123;
let b = 456;

let temp = a;
a= b;
b = temp;

[a,b] = [b,a];

const [a= 10, b=20] = [10];
console.log(a,b);

const arr = [1, 2, 3, 4, 5,6];
const [one, rwo, five] =350;
console.log(one, two, ...others) = arr;
console.log(one, two, others);
*/

/*
메서드드
const title = document.getElementById('title');
console.log(title);

const title = document.getElementsByClassName('title_class');
console.log(title);

const title = document.getElementsByTagName('h2');
console.log(title);

const title = document.querySelector('#title');
console.log(title);

const title = document.querySelector('h2');
console.log(title);

const title = document.querySelector('.title_class');
console.log(title);

const title = document.querySelectorAll('#title');
console.log(title);

const title = document.querySelector('h2');
title.innerText = '안녕!';
title.style.color = 'blue';

html element를 상속받기에 가능.


const title = document.createElement('h1');
const body = document.querySelector('body');
title.innerText='새 친구!';
title.style.color= 'red';

body.appendChild(title)

const button = document.querySelector('button');
const removeButton = document.querySelector('.remove');

function handler(event) {
    console.log('!');
}

function removeHandler(event) {
    button.removeEventListener('click',handler);
}

button.addEventListener('click',handler);
removeButton.addEventListener('click',removeHandler);

*/

import { greeting } from "./index1.js";
greeting();
