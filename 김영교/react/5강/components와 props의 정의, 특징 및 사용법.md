마크다운?

리액트는 컴포넌트 기반의 구조
모든 페이지가 컴포넌트로 구성되어있어
또 다른 여러개의 컴포넌트 조합으로 구성될 수 있음

리액트 컴포넌트는 개념적으로 자바스크립트와 유사
입력을 받아서 출력을 진행
리액트 컴포넌트에서의 입력은 props, 출력은 react element
어떠한 속성들을 받아서 그에 맞는 리액트 element 생성하여 return

class-instance(붕어빵틀-붕어빵)처럼,
component-element(붕어빵틀-붕어빵)으로 이해하면 쉽다.
객체지향까지는 아닐지언정, 비슷한 개념으로 이해하기

props
prop=property(리액트 component의 속성==붕어빵에 들어가는 재료)
: 컴포넌트에 전달한 다양한 정보를 담고 있는 자바스크립트 객체

1. 읽기 전용
   : 값을 변경할 수 없다.(붕어빵 다 구운 후에 속재료를 바꿀 수 없음)

다른 props의 값으로 element값을 생성하고 싶으면?
-> 새로운 값을 컴포넌트에 전달하여 새로 element를 생성

- javascript의 속성

//순수한 pure한 상태
function sum(a,b){
return a + b;
}
//입력값을 변경하지 않으며 같은 입력값에 대해서는 항상 같은 출력값을 리턴

//순수하지 않은 상태
function withdraw(account,amount){
account.total -= amount;
}
//계좌 출금 함수=입력값을 변경

모든 리액트 컴포넌트는 props를 직접 바꿀 수 없고, 같은 props에 대해서는 항상 같은 결과를 보여줄 것!

- props 사용법
  function App(props){
  return(
  <Profile
          name="소플"
          introduction="안녕하세요, 소플입니다"
          viewCount={1500}
          />
  );
  }

위 함수에서의 props
{
name: "소플",
introduction: "안녕하세요, 소플입니다"
viewCount: 1500
}
