/* #14 객체심화 */
/*const obj = {
  x: 1,
  y: 2,
  z: 3,
};

for (key in obj) {
}
//객체 축약 표현
const name = "이도해";
const country = "KR";

const user = {
  name,
  country,
};

console.log(user);
//메소드 축약 표현
const obj = {
  greeting: function () {
    //function 생략 가능
    console.log("Hi!");
  },
};

obj.greeting();

//정적 메소드의 호출
const obj = {
  x: 10,
  y: 20,
  z: 30,
};

console.log(Object.keys(obj));
console.log(Array.isArray(obj));
//이런 정적 메소드들을 생성된 객체에 내장되어 있는 것이 아니라
//Object, Array 클래스가 가지고 있기 때문에 앞에 Object 또는 Array 등을 붙여야 사용 가능
*/
/* #15 구조 분해 할당 */
//배열의 구조분해할당
/*const arr = [1,2,3,4,5];
const [one, two, three] = arr;
//객체의 구조분해할당
const obj = {
    x: 10,
    y: 20,
};

const{} //구조 파괴 선언에 이니셜라이저가 있어야 함
//객체의 중첩 구조분해할당
const obj = {
    one: {
        two: {
            three: 'Bingo',
        },
    },
};

const { one: {}} = obj;
console.log(bingo);

//함수와 구조분해할당
const obj = {
    x: 10,
    y: 20,
};

function sum({x: hello, y: world}) {
    return hello + world;
}

console.log(sum(obj));

//구조분해할당 활용 예제 (1)
let a = 123;
let b = 456;

[a, b] = [b, a];

//구조분해할당 활용 예제(2)
const [a=10, b=20] = [10];

console.log(a,b); 

/* #16 DOM (Document Object Model) */
//getElementById()*/
/*const title = document.getElementById('title');
console.log(title);

//getElementByClassName()
const title = document.getElementByClassName('title_class');
console.log(title);

//getElementByTagName
//querySelector()
//querySelectorAll() 모두 위와 같음!


//HTML 요소의 속성 변경 방법
const title = document.querySelector('h2');

title.innerText = '안녕하세요!';
title.style.color = 'blue';

/* #17 이벤트 */
//addEventListener(),  removeEventListner()*/
/*const button = document.querySelector('button');

function handler(event) {
    console.log(event);
}
function removeHandler(event) {
    console.log('이벤트 삭제');
}
button.addEventListener('click');
removeButton.addEventListener('click', removeHandler);

/* #18 모듈 */
/* 모듈 생성 및 내보내기
export function greeting() {
    console.log('Hello');
} */
//html 문서에 type="module" 작성
//외부 모듈 가져오기 (import)
/*import {greeting} from './hello.js'
greeting();*/
