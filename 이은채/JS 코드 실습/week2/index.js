/* 5.1 문자열 메소드 */

const str = 'Hello World!';

console.log(str.toUpperCase);
console.log(str.toLowerCase);

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

console.log(str.repeat(3));

console.log(str.padStart(10,'_'));
console.log(str.padEnd(10,'_'));

console.log(str.indexOf('World'));

console.log(str.includes('World'));

console.log(str.startsWith('World'));
console.log(str.EndssWith('World'));

console.log(str.replace('World','a'));
console.log(str.replaceAll('World','a'));

console.log(str.substring(0,5));

console.log(str.slice(3));

const str2 = '월요일, 화요일, 수요일, 목요일, 금요일, 토요일, 일요일';
console.log(str.split(','));


/* 5.2 객체 심화 */
const object = {
    x: 1,
    y: 2,
    z: 3,
};

fot (key in obj); {
    console.log(key);
}

const name = '이은채';
const country = 'KR';

const user = {
    name,
    country,
}

console.log(user);

const object2 = {
    greeting : function() {
        console.log('Hi');
    },
};

obj.greeting();

const obj = {
    x: 10,
    y: 20,
    z: 30,
};

console.log(Object.keys(obj));
console.log(Array.isArray(obj));
console.log(Object.valeus(obj));
console.log(Object.entries(obj));

/* 5.3 구조분해할당 */
const arr = [1, 2, 3, 4, 5];
const one = arr[0];
const two = arr[1];
const three = arr[2];

console.log(one, two, three);

const obj2 = {
    x: 10,
    y: 20,
};

const {x:a,y:b} = obj2;
console.log(x, y);

const obj3 = {
    one : {
        two : {
            three : 'Bingo',
        }
    }
}

console.bingo = obj3.one.two.three;


const {one:{two :{three1},}} = obj3;
console.log(bingo);

const obj4 = {
    x: 10,
    y: 20,
}
