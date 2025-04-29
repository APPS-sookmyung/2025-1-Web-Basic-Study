//#1 문자열 메소드

const str = "Hello world";
//대문자 변환
console.log(str.toUpperCase());
//소문자 변환
console.log(str.toLowerCase());

const str1 = "             haha         ";
//앞 공백 제거
console.log(str1.trimStart());
//뒤 공백 제거
console.log(str1.trimEnd());

//반복
const str2 = "Hello";
console.log(str2.repeat(3));

const str3 = "Hello";
//앞에 지정한 문자열 추가
console.log(str3.padStart(10, "_"));
//뒤에 지정한 문자열 추가
console.log(str3.padEnd(10, "_"));

//주어진 문자열에서 키워드 검색해서 일치하는 첫번째 인덱스 반환
const str4 = "안녕하세요, 이룸코딩입니다!";
console.log(str4.indexOf("이룸"));

//주어진 문자열에서 키워드 검색해서 찾으면 True, 못 찾으면 False
const str5 = "안녕하세요, 이룸코딩입니다!";
console.log(str5.includes("이룸"));
console.log(str5.includes("한국"));

//주어진 문자열로 시작하는지 끝나는지 검색해서 맞으면 True, 아니면 False
const str6 = "안녕하세요, 이룸코딩입니다!";
console.log(str6.startsWith("안녕"));
console.log(str6.endsWith("안녕"));

//교체해서 새로운 문자열로 반환
const str7 = "안녕하세요, 이룸코딩입니다!";
//첫번째 해당 문자열만 교체
console.log(str7.replace("이룸코딩", "개발자 이도해"));
//모두 교체
console.log(str7.replaceAll("이룸코딩", "개발자 이도해"));

//주어진 시작 인덱스부터 주어진 종료 인덱스의 이전까지 새로운 문자열로 반환
const str8 = "안녕하세요, 이룸코딩입니다!";
console.log(str7.substring(0, 5));

const str9 = "월요일, 화요일, 수요일, 목요일, 금요일, 토요일, 일요일";
console.log(str9.split(","));

const str10 = "Hello World!";
console.log(str10.slice(3, 5));
//음수는 끝에서부터
console.log(str10.slice(-3));

//#2 배열 메소드

//끝에서 추가
const arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.push(7, 8);
console.log(arr);
//끝에서 제거
arr.pop();
arr.pop();
//앞에서 추가
arr.unshift(10, 20, 30);
//앞에서 제거
arr.shift();
arr.shift();

//주어진 함수를 배열 요소에 각각 실행
function print(number, indelx) {
  console.log("${index} 위치의 요소 : ${number}");
}
arr.forEach(print);

//어떤 함수를 저장해야한다면 map 사용

//
const arr1 = ["hello", "world"];
console.log(arr1.includes("hello"));

//만족하는 판별 함수의 첫 번째 요소의 값 반환
console.log(arr.find((number) => number > 3));

//만족하는 판별 함수의 첫 번째 인덱스 값 변환
console.log(arr.findIndex((number) => number > 3));

//값 채우기 (채우는 값, 시작 인덱스, 종료 인덱스)
arr.fill(10, 1, 3);

//잘라서 새로운 배열로 반환
console.log(arr.slice(2, 4));

//선택적으로 제거 추가 (인덱스, 제거할 개수, 추가할 값)
arr.splice(2, 1, 999);

//배열 모두 이어붙여 하나의 문자열로 반환
const arr2 = ["hello", "world", "hi", "wow"];
console.log(arr2.join());

//인자로 주어진 배열이나 값들을 기존 배열에 합쳐 새로운 배열로 반환
const numbers = [123, 456];
console.log(arr2.concat(numbers));

//참인 요소들만 모아 새로운 배열로 반환
console.log(arr.filter((number) => number > 3));

//10은 초기값해서 더해주는 것
const reducer = (acc, value) => acc + value;
console.log(arr.reduce(reducer, 10));

//#3 객체 심화

//사용법
const obj = {
  x: 1,
  y: 2,
  z: 3,
};
for (key in obj) {
  console.log(key);
}

//객체 축약 표현(중복될 때 생략 가능 ex)name, country)
const nume = "이도해";
const country = "KR";

const user = {
  name: name,
  country: country,
};
console.log(user);

//메소드 축약 표현 (function 생략)
const obj1 = {
  greeting: function () {
    console.log("Hi");
  },
};
obj1.greeting();

//
const obj2 = {
  x: 10,
  y: 20,
  z: 30,
};
console.log(Object.keys(obj2));
console.log(Object.values(obj2));
console.log(Object.entries(obj2));

//#4 구조 분해 할당

//배열 구조 분해 할당
const arr3 = [1, 2, 3, 4, 5];
const [one, two, three] = arr3;
console.log(one, two, three);

//객제 구조 분해 할댕
const obj3 = {
  x: 10,
  y: 20,
};
const { x, y } = obj3;
console.log(x, y);

//객체의 중첩 구조분해할당
const {
  one: {
    two: { three },
  },
} = obj3;
console.log(three);

//함수의 구조분해할당
const obj4 = {
  x: 10,
  y: 20,
};

function sum({ x, y }) {
  return x + y;
}

console.log(sum(obj4));

//구조 분해 할당 예시
let a = 123;
let b = 456;
let temp = a;

a = b;
b = temp;
//=> 위의 것을 이렇게 간단하게
[a, b] = [b, a];

const arr = [1, 2, 3, 4, 5];
//건너 뛰고 싶을 때는 , 로 써주지 않으면 됨

//#5 DOM

const title = document.getElementById("title");
console.log(title);

const title = document.getElementsByClassName("title_class");
console.log(title);

const title = document.getElementsByTagName("h2");
console.log(title);

const title = document.querySelector("h2");
console.log(title);

const title = document.querySelector(".title_class");
console.log(title);

const title = document.querySelectorAll(".title_class");
console.log(title);

//HTML 요소의 속성 변경
const title = document.querySelector("h2");
title.innerText = "안녕하세요";
title.style.color = "blue";
console.log(title);

//추가
const title = document.createElement("h1");
const body = document.querySelector("body");
title.innerText = "새로운 친구에요";
title.style.color = "red";
body.appendChild(title);

//#6 이벤트
const button = document.querySelector("button");
const removeButton = document.querySelector(".remove");

function handler(event) {
  console.log(event);
}
function removeHandler(event) {
  console.log("이벤트삭제");
}

button.addEventListener("click", handler);
removeButton.addEventListener("click", removeHandler);

//#7 모듈

//외부 모듈 가져오기
import { greeting } from "./hello.js";

//내보내기
import Hello from "./hello.js";
