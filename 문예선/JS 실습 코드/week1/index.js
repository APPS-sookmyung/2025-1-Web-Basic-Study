let hi;

hi = '문예선';

let hihi = '안녕하세요';

const helloo = "반가워요!";

console.log(hi);

console.log(hihi);

console.log(hello);

var abc =123;

var abc = 567;

console.log(abc);

const numberr = 123;

console.log(typeof number);

const name = '문예선';

console.log(typeof name);

const age = 21;

const job= '대학생';

const msg =  '저는' + job + '이고' +age + '살입니다.';

const msg2 = `저는 ${job}이고, ${age}살입니다.`;

console.log(msg);

console.log(msg2);

const isTrue = true;

console.log(typeof isTrue);

let hello;

console.log(hello);

const arr = [1,2,3,[4,5],{name : '문예선'}];

console.log(arr);


const obj = {

job: '대학생',

arr : [1,2,3],

something: {

name: '문예선',

},

};

console.log(obj.name);

console.log(obj['name']);

consol.log(10/5);

consol.log(10%5);

consol.log(10**5);

let number = 10;

number++

consol.log(number);

const c= 10;

const d = 20;

console.log(d>c);
/*
const a = 2<3;

const b= 30>50;

consol.log(a&&b);

consol.log(a||b);
consol.log(!a);
*/
console.log(2 < 3 ? '참' : '거짓');

if (c<d) {
    console.log("c가 더 작아요");
}
if (c>d) {
    console.log("c가 더 작아요");
}
if (c<d) console.log("c가 더 작아요");

if (c>d) {
    console.log("c가 더 작아요");
} else if(c==d) {
    console.log("테스트트");
} else {
    console.log("거짓");
}

const test = 10;

/*
if (test % 2 == 0) {
    console.log("짝수");
} else {
    console.log("홀수");
}
*/

switch (test % 2) {
    case 0:
        console.log("짝수");
        break
    case 1:
        console.log("홀수");
        break
};

for (let i=0; i<5; i++) {
    console.log(i);
}

let f= 0;

for (; f<5; ) {
    console.log(f++);
}

for (let i=7; i<15; i++) {
    if (i===7){
        continue;
    }
    console.log(i);
}

const arr3 = [1,2,3];

for (const i of arr3) {
    console.log(i);
}

let t = 0;

while (t<10) {
    console.log(t++);
}
/*
do {
    console.log(t++);
} while (t<10);
 */

function bok(main) {
    console.log(`${main} 볶음밥`);
}
bok('새우');
/*
function sum(k,g) {
    console.log(k+g);
}
sum(10,20);
*/
function p() {
    const o = 10;
    console.log(o);
}

o();
console.log(o);

/*
function sum (k,g){
console.log(a+b);

}
sum(10);


function sum (k,g=0){
console.log(k+g);
consol.log(arguments[3])
}
sum(10);
sum(10,20,30);

function print (a,b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

print(10,11,12,13);


funtion sum(a,b) {
    return a+b;
}
console.log(sum(10,20));


const sum = funtion sum(a,b) {
    return a+b;
}
console.log(sum(10,20));


const sum = (a,b) => console.log(a+b) ;
console.log(sum(10,20));
*/


const hell = () => {
    console.log("HellO");
    console.log("World");
};
hell();

const sum = (a,b) => {
    return(a+b);
};
console.log(sum(10,20));

const greeting = (user) => {
    consol.log(`hello ${user}`);
};

greeting("문예선");