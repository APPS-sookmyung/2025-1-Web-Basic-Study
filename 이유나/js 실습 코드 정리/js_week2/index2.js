// #7 조건문(switch, if 비교) //
const number = 10;

if (number % 2 == 0) {
  console.log("짝수");
} else {
  console.log("홀수");
}

switch (number % 2) {
  case 0:
    console.log("짝수");
    break;
  case 1:
    console.log("홀수");
    break;
}

//#8 반복문 (for, break, continue, for of, while, do while) //
// ver1 //
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// ver2 //
let i = 0;
for (; i < 5; ) {
  console.log(i++);
}
// continue 사용 //
for (let i = 0; i < 10; i++) {
  if (i === 7) {
    continue;
  }

  console.log(i);
}
// for of //
const arr = [1, 2, 3];

for (const i of arr) {
  console.log(i);
}
// do while //
let k = 0;

do {
  console.log(k++);
} while (k < 10);

// #10 함수(인자와 매개변수 차이점, 지역변수와 전역변수, arguments, Default Parameter, Rest Parameter) //
function bok(main) {
  console.log(`${main} 볶음밥`);
}

bok("새우");
bok("제육");

// 인자 2개 받는 함수 //
function sum(a, b) {
  console.log(a + b);
}

sum(10, 20);

/*인자: 함수의 입력 값: argument
매개변수: 함수의 입력 변수: parameter */

// 지역변수와 전역변수
const b = 10; /* 글로번(전역) 변수 */

function a() {
  const b = 20; /* 로컬(지역) 변수 */
  console.log(b);
}

a();
console.log(b);

// rest parameter
function print(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
}

print(10, 20, 30, 40, 50, 60, 70);

// 함수의 반환 값 (return)
function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20));

// #11 화살표 함수 (함수의 표현식) //
