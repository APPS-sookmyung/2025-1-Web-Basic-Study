//원시 데이터 타입: 객체가 아니면서 메소드도 가지지 않는 데이터
//string, number, bigint, boolean, undefined, null, symbol

const number = 123;
console.log(typeof number);
//number의 데이터타입을 알려주는

//bigint 데이터타입: 아주 큰 숫자나 아주 작은 숫자를 표현해야할 때
//bigint 임을 나타내려면 값 뒤에 n을 붙여 표시
//const number=123n;

//string type
const name = "김영교";
console.log(typeof name);

// 느낌표 옆의 물결을 그냥 누르면 나오는 ```(백틱_)
const age = 20;
const job = "개발자";
const message = "저는 " + job + "이고 " + "나이는 " + age + "살입니다";
console.log(message);
const message2 = `저는 ${job}이고, ${age}살 입니다.`;
console.log(message2);

//boolean: 참또는거짓 둘중에 하나만 값으로 가질 수 있는 논리 타입
const isTrue = 10 > 20;
console.log(isTrue);

//null타입: 값이 아예 없다는 것을 나타냄
//undifined 타입: 값이 없는 것이 아니라, 값이 아직 지정되지 않았다. 선언만하고 초기화 하지 않았을 때
