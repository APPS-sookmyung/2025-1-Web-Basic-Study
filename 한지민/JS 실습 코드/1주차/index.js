let hi = "한지민";
hi = "안녕하세요";
console.log(hi);

const hello = "안녕 !";
console.log(hello);

const number = 123;
console.log(typeof number);

const number1 = 123n;
console.log(typeof number1);

const name = "한지민";
console.log(typeof name);

const age = 20;
const job = "개발자";
const msg = "저는 " + job + "이고, " + age + "살 입니다.";
const msg2 = `저는 ${job}이고, ${age}살 입니다.`;
console.log(msg);
console.log(msg2);

const isTrue = 10 < 20;
console.log(typeof isTrue);

let hello1;
console.log(hello1);

const arr = [1, 2, 3];
console.log(arr);
console.log(arr[0]);

const obj = {
  name: "한지민",
  job: "개발자",
};
console.log(obj);

console.log(obj.name);
console.log(obj["name"]);

const arr1 = [1, 2, 3, [4, 5]];
console.log(arr1);

const arr2 = [1, 2, 3, { name: "한지민" }];
console.log(arr2);

const obj1 = {
  arr: [1, 2, 3],
  something: {
    name: "한지민",
  },
};
console.log(obj1);

let number2 = 10;
number2++;
console.log(number2);

let number3 = 10;
number3--;
console.log(number3);

const a = 10;
const b = 20;
console.log(a !== b);

const c = 2 < 3;
const d = 30 > 50;
console.log(c || d);

console.log(2 < 3 ? "참" : "거짓");

const e = undefined;
const f = null;
const g = "한지민";
console.log(e ?? f ?? g);

let number4 = 10;
number4 += 2;

const numbers = [1, 2, 3];
const numbers2 = [4, 5, 6];
const newnumbers = [...numbers, ...numbers2];
console.log(newnumbers);

const h = 10;
const i = 20;
const j = 20;
if (h > i) {
  console.log("h가 더 큽니다 !");
} else if (i === j) {
  console.log("b랑 c가 같습니다!");
} else {
  console.log("여기는 언제 출력될까요 ?");
}

const number5 = 10;
switch (number5) {
  case 1:
    console.log(number5);
    break;
  case 2:
    console.log(number5);
    break;
  default:
    console.log("아무것도 해당되지 않아요!");
}

const number6 = 10;
if (number6 % 2 == 0) {
  console.log("짝수!");
} else {
  console.log("홀수!");
}

switch (number6 % 2) {
  case 0:
    console.log("짝수!");
    break;
  case 1:
    console.log("홀수!");
    break;
}

for (let k = 0; k < 5; k++) {
  console.log(k);
}

for (let m = 0; m < 10; m++) {
  if (m === 7) {
    break;
  }
  console.log(m);
}

const arr10 = [1, 2, 3];
for (const n of arr10) {
  console.log(n);
}

let o = 0;
while (o < 10) {
  console.log(o++);
}

let p = 0;
do {
  console.log(p++);
} while (p < 10);

function bok(main) {
  console.log(`${main} 볶음밥`);
}
bok("새우");
bok("제육");

function sum(a, b) {
  console.log(a + b);
}
sum(10, 20);

function a() {
  const b = 10;
  console.log(b);
}

a();
console.log(b);

function print(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
}
print(10, 20, 30, 40, 50, 60, 70);

function sum(a,b) {
 console.log(a+b);   
}

const sum function(a,b) {
    console.log(a+b);   
}
sum(10,20);

const sum = (a,b) => console.log(a+b);