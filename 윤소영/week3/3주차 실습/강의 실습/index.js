// 대소 문자 변환 메소드
const str = "Hello World!";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim()); // 공백 제거
console.log(str.trimStart());
console.log(str.trimEnd());

// 기존 문자열 가공해서 새로운 문자열 생성하는 메소드
const str2 = "Hello";

console.log(str2.repeat(3));
console.log(str2.padStart(10, '_'));
console.log(str.padEnd(10, '_'));

// 문자열에서 특정 부분을 검색하는 메소드
const str3 = '안녕하세요. 윤소영입니다!';

console.log(str3.indexOf('윤소영'));
console.log(str3.includes('윤소영'));
console.log(str3.includes('한국'));
console.log(str3.startsWith('안녕'));
console.log(str3.endsWith('안녕'));

// 문자열 수정하는 메소드
console.log(str3.replace('윤소영', '개발자 윤소영'));
console.log(str3.replaceAll('윤소영', '개발자 윤소영'));
console.log(str3.substring(0, 5));

const str4 = '월요일, 화요일, 수요일, 목요일, 금요일, 토요일, 일요일';
console.log(str4.split(','));
console.log(str.slice(3, 5));
console.log(str.slice(-3));

// 배열 메소드
const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.pop();

arr.unshift(10, 20, 30);
arr.shift();

console.log(arr);

function print(number, index) {
    console.log(`${index} 위치의 요소 : ${number}`);
}
arr.forEach(print);
arr.map(print);

// 배열 요소를 검색하는 메소드
const arr2 = ['hello', 'world'];

console.log(arr2.includes('hello'));
console.log(arr2.includes('zo'));
console.log(arr.find((number) => number > 3));
console.log(arr.findIndex((number) => number > 3));

// 배열의 요소를 수정하는 메소드
arr.fill(10, 1, 3);
console.log(arr);
console.log(arr.slice(2, 4));

arr.splice(2, 1, 999);
console.log(arr);

const arr3 = ['hello', 'world', 'hi', 'wow'];
console.log(arr3.join(';'));

const numbers = [123, 456]
console.log(arr3.concat(numbers));

console.log(arr.filter((number) => number > 3));

const reducer = (acc, value) => acc + value;
console.log(arr.reduce(reducer, 10));

// 객체 메소드
const obj = {
    x: 1,
    y: 2,
    z: 3,
};

for (key in obj) {
    console.log(key)
}

const name = '윤소영';
const country = 'KR';

const user = {
    name: name,
    country: country,
};

console.log(user);

const obj2 = {
    greeting: function () {
        console.log('Hi!');
    },
};
obj2.greeting();

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// 구조 분해 할당
const arr4 = [1, 2, 3, 4, 5];
const [one, two, three] = arr4;
console.log(one, two, three);

const obj3 = {
    x: 10,
    y: 20,
};
const { x: hello2, y } = obj3;
console.log(hello2, y);

const obj4 = {
    one: {
        two: {
            three: 'Bingo',
        },
    },
};

const { 
    one: {
        two: { three2 },
    },
} = obj4;
console.log(three2);

function sum(x, y) {
    return x + y;
}
console.log(sum(obj3));

let a = 123;
let b = 456;
[a, b] = [b, a];

const [a1 = 10, b1 = 20] = 10;
console.log(a1, b1);

const arr5 = [1, 2, 3, 4, 5];
const [one2, , three3, , five] = arr5;
console.log(one2, three3, five);

const [one3, two2, ...others] = arr5;
console.log(one3, two2, others);

// DOM
// 이벤트
// 모듈