//원시타입 변수 생성시 메모리 공간에 변수를 위한 공간 할당. 그 공간 안에 값 저장. 변수가 값을 가리키고 있는 것
//참조타입 변수 생성시 힙이라는 공간에 변수를 저장하고 변수에는 힙을 가리키는 메모리 주소값을 저장.변수를 사용할땐 주소값을 참조해서 사용하는 것

//배열
const arr = [1, 2, 3];
console.log(arr);

//요소접근하는 방법
console.log(arr[2]);

//객체: 여러 타입을 가진 데이터들의 집합
//각각의 요소가 키와 값으로 구성, 키와 값의 쌍=property
const obj = {
  name: "김영교",
  job: "개발자",
};
console.log(obj);

//property 값에 접근하는 벙법
//1. 점표기법
console.log(obj.name);
//2. 대괄호 표기법
console.log(obj["name"]);
//일반적으로 점표기법을 사용

const arr1 = [1, 2, 3, [4, 5]];
console.log(arr1);

const arr2 = [1, 2, 3, { name: "김영교" }];
console.log(arr2);

const obj1 = {
  arr: [1, 2, 3],
  something: {
    name: "김영교",
  },
};
console.log(obj1);
