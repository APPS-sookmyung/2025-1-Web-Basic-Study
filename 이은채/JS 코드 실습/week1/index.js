/* 2.1 변수와 상수수 */
let a = '이은채';
a='안녕하세요';

const hello = '안녕하세요!!'

console.log(a);


/* 2.2 원시 데이터 타입 */
const number=123n;
console.log(typeof number);

const name = '이은채';
console.log(typeof name);

const age=20;
const job='개발자';

const msg='저는 ' + job + '이고' + age + '살 입니다.';
const msg2=`저는 ${job}이고, ${age}살 입니다.`;
console.log(msg2);

const isTrue=10<20;
console.log(typeof isTrue);

let b;
console.log(b);



/* 2.3 참조 데이터 타입 */
const arr=[1,2,3,{name:'이은채'}];
console.log(arr);

const obj={
    name:'이은채',
    job:'개발자',
};
console.log(obj['name']);

const obj2={
    arr:[1,2,3],
    job:'개발자',
};



/* 2.4 연산자 */
console.log(10%3);
console.log(2**3);

let number2=10;
number2--;
console.log(number2);

const aa=10;
const bb=20;

console.log(a==b);
console.log(a===b);
console.log(a!==b);

const aaa = 2<3;
const bbb = 30>50;

console.log(a && b);
console.log(a || b);
console.log(!a);

console.log(2<3? "참" : "거짓");
console.log(2>3? "참" : "거짓");

const a1=undefined;
const b1=null;
const c1='이은채';

console.log(a1 ?? b1 ?? c1);

let number3=10;
number3=number3+2;
number3 +=2;

number3 %=2;

const numbers=[1,2,3];
console.log(...numbers);

const numbers2=[4,5,6];
const newNumbers=[...numbers, ...numbers2];



/* 3.1 조건문 */
const x=10;
const y=20;

if (x<y){
    console.log('x가 더 작아요!');
}

if (x>y){
    console.log('x가 더 작아요!');
} else {
    console.log('거짓!')
}

const z = 20;

if (x>y){
    console.log('x가 더 큽니다!');
} else if (y==z) {
    console.log('b와 c가 같습니다')
} else {
    console.log('여기는 언제 출력될까요?')
}



/* 3.2 조건문(switch) */
const number4=10;
switch(number4){
    case 1:
        console.log(number4);
        break;
    case 10:
        console.log(number4);
    default:
        console.log('아무것도 해당되지 않아요!')
}

const num=10;
if (num%2==0){
    console.log('짝수!');
} else {
    console.log('홀수!');
}

switch (num%2==0){
    case 0:
        console.log('짝수!');
        break;
    case 1:
        console.log('홀홀수!');
        break;
}



/* 3.3 반복문 */
for (let i=0; i<5; i++) {
console.log(i)
}

let i=0
for (; i<5;) {
    console.log(i++)
}

for (let i=0; i<10; i++){
    if (i===7){
        break;
    }
    console.log(i)
}

for (let i=0; i<10; i++){
    if (i===7){
        continue;
    }
    console.log(i)
}



/* 3.4 반복문2 */
const arr2=[1,2,3];

for (const i of arr2) {
    console.log(i);
}

let j=0;
while (j<10) {
    console.log(j++);
}

do {
    console.log(j++);
} while(j<10);



/* 4.1 함수 */
function bok(main) {
    console.log(`${main} 볶음밥`);
}

bok('새우');
bok('제육');

function sum(a,b) {
    console.log(a+b);
}

sum(10,20);


const bbbb=10;
function aaaa() {
    const bbbb=20;
    console.log(bbbb);
}

aaaa();
console.log(bbbb);


function sum2(a,b){
    console.log(a+b);
}

sum2(10,20,30);

function print (a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

print(10,20,30,40,50,60);

function sum3(a,b){
    return a+b;
}

console.log(sum(10,20));



/* 4.2 화살표 함수 */
const sum4=function (a,b) {
    console.log(a+b);
}

sum4(10,20);


const sum5=(a,b)=> a+b;
    
console.log(sum5(10,20));

const sum6=(a,b)=> {
    a+b;
};
console.log(sum6(10,20));


const hello2 = () => {
    console.log('Hello!');
    console.log('World!');
};

const sum7 = (a,b) => {
    return a+b;
};

console.log(sum7(10,20));

const greeting = user => console.log(`Hello, ${user}!`);
greeting('이은채');