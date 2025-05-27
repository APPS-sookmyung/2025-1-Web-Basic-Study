condition=조건
conditional rendering 조건에 따른 렌더랑
: 어떠한 조건에 따라서 렌더링이 달라지는 것
: 조건문의 값이 true이면 버튼을 보여주고, false이면 버튼을 가리기

javascipt의 truthy와 falsy
:truthy == true는 아니지만 true로 여겨지는 값
:falsy== false는 아니지만 false로 여겨지는 값

//truthy
true
{} (empty object)
[] (empty array)
42 (number, not empty)

//falsy
false
0,-0 (zero, minus zero)
0n(BigInt zero)
'', "", `` (empty string)
null
undefined
NaN(not a number)

element variables(element 변수)
:리액트 앨리먼트를 변수처럼 다루는 방법

inline(해당 코드 안에 직접 삽입) conditions
:조건문을 코드 안에 직접 집어넣는 것

inline if(if문을 필요한 곳에 직접 넣어 사용)
: &&연산자 사용
true&&expressiong -> expression
false&&expression -> false

{unreadMessages.length > 0 &&

<h2></h2>
}//예시

inline if-else
: ? 연산자 사용
condition ? true: false

component 렌더링 막기
: null을 리턴하면 렌더링되지 않음
