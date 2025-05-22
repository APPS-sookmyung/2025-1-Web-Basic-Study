event란?
:특정 사건을 의미
:ex)버튼 클릭 이벤트

Dom event
<button onClick='activate()'>
Activate
</button>

react event
<button onClick={activate}>
Activate
</button>

표기법과 함수를 전달하는 방식에서 차이가 있음

event handler
:어떤 사건이 발생하면 그를 처리하는 역할

event listner
: 이벤트가 발생하는 것을 계속 듣고 있는다는 의미

bind가 번거롭게 느껴지면
handleClick=()= {
console.log('this is:', this);
}처럼 class fields syntax사용가능

함수 내에서 event hadler정의하는 방법

1. 함수 안에 함수로 정의
2. arrow function을 사용하여 정의

arguments (함수에 전달할 데이터)
parameter(매개변수)
