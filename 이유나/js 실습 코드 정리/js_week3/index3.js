// #12 문자열 메소드 (자주쓰이는, 알아두면 유용한한)
const str = "Hello World!";

//문자열 대문자 전환
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//문자열 공백 제거 메소드

console.log(str.trim());
console.log(str.trimStart()); //앞쪽만 제거
console.log(str.trimEnd()); //뒤쪽만 제거

//repeat
console.log(str.repeat(3)); //인자만큼 반복
console.log(str);

//padding

console.log(str.padStart(10, "_")); //새로운 문자열로 반환한다. 원본은 바뀌지 않는다.

// indexOf()

console.log(str.indexOf("H")); //찾지 못했을때는 -1

//includes 입력한 문자열이 포함되어 있는지지
console.log(str.includes("한국"));

//startwith, endwith
console.log(str.startsWith("Hello"));

//replace 첫번째 문자열만만 바꾸기
console.log(str.replace("Hello", "Hi"));
/*replaceAll은 모든 문자열 가능*/

//substring
console.log(str.substring(0, 5));

//split 문자열을 잘라서 배열로 반환
console.log(str.split(" "));

//slice 인덱스만큼큼 새로운 문자열로 반환
console.log(str.slice(3, 8)); //-n 은 뒤에서부터 문자열을 자름

// #13 배열 메소드
const arr = [1, 2, 3, 4, 5];

//push 배열 끝에 새로운 요소 추가
arr.push(6, 7);
console.log(arr);

//unshift 앞부분에 인자 추가
arr.unshift(10, 20, 30);
console.log(arr); //shift는 앞에서 부터 pop한다

/* forEach
함수가 필요
number가 필요 */

/*includes 
arr에 인자가 있는지 없는지*/

/*find*/
/*findindex*/

/*fill
배열을 지정한 값으로 채워줌
인덱스 선택 가능*/

/*slice
배열의 복사본을 조각내서 새로운 배열로 반환
지정된 시작인덱스부터 반환
원본 문자열을 바뀌지 않음*/

/*splice
배열에 제거, 추가할 요소를 선택 할 수 있음
제거할 위치에 채워넣을 요소도 지정 가능*/

/*join 
배열의 모든 요소들을 이어붙여 하나의 문자열로 반환
콤마로 포함
구분자를 인자로 지정 가능*/

/*concat
기존 배열에 인자로 전달한 배열을 추가해서 새로운 배열로 반환
인자를 문자로 지정 가능*/

/*filter 
주어진 판별함수의 요소를 참인 요소만 반환
필터링과 비슷
화살표 함수 이용*/

/*reduce
복잡함
reduce 필수인자: reducer 함수
reducer 필수인자: acc(누산기), cur(현재 값)

/*복습*/

/**
 * variable 선언하기
 * 1) var - 더 이상 안 쓴다.
 * 2) let -
 * 3) const -
 */
var name = "코드팩토리";
console.log(name);

var age = 32;
console.log(age);

/**
 * let과 var로 선언하면 값을 추후 변경할 수 있다.
//  * const는 변경하려면 에러가 남. contant 변수는 값을 또 배정할 수 없다.
 */

/**
 * 선언과 할당
 *
 * 1) 변수를 선언하는 것.
 * var name; name이라는 변수를 만들겠다는 선언
 * 2) 할당
 * 변수에 값을 넣어주는 것
 * 할당을 안할 수도 있음. -> undefined가 출력됨
 * const는 값을 할당해줘야함.
 */

/**
 * 이름짓는 법
 *
 * 지켜야하는 것 4가지
 * 1. 일반적으로 영어를 사용하며 문자와 숫자를 모두 사용 할 수 있다.
 * 2. 특수기호는 _와 $만 사용
 * 3. 숫자로 시작할 수 없다.
 * 4. 키워드는 변수명으로 사용 할 수 없다.
 * ex) var var='var'; 불가능
 */

/**
 * 약속
 *
 * 1) camelCase
 * 띄어쓰기 마다 대문자 넣기, 첫번째는 소문자 -> 대부분의 언어에서 사용
 * 2) snake_case
 * 소문자 사용하고 _로 구분 -> ex.파이썬에서
 * 3)PascalCase
 * 첫번째 글자도 대문자로 사용, camelcase와 비슷 -> 잘 안씀
 */

/**
 * #데이터타입
 * data types
 *
 * 여섯개의 primitive type과
 * 한개의 오브젝트 타입이 있다.
 *
 * 1) number (숫자)
 * 2) string (문자열)
 * 3) boolean(불리언, true, false)
 * 4) undefined
 * 5) null
 * 6) symbol
 *
 * 7) Object (객체)
 * function, array ...
 */

/**
 * 1) number 타입
 * const age = 32;
 * const pi = 3.14;
 * console.log(typeof age); -> 타입을 알 수 있음
 * number가 출력
 * infinity 값도 넣을 수 있음
 */

// 2) string 타입
const codeFactory = "코드팩토리";
console.log(typeof codeFactory);
