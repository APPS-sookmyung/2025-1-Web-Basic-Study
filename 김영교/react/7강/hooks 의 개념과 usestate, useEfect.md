hooks

function componen
-state사용 불가
-lifecycle에 따른 기능 구현 붉
-hook(class component의 모든 기능 구현이 가능해짐)

class component -생성자에서 state를 정의
-setstate()함수를 통해 state 업데이트
-lifecycle methods 제공공

hook:
react state와 lifecycle에 갈고리를 걸어 원하는 시점에 정해진 함수가 실행되도록

useState()
:state를 사용하기 위한 hook

import React, { useState } from "react";

function Counter(props){
var count=0;
return (
<div>
<p> 총 {count}번 클릭했습니다. </p>
<button onClick={() => count++}>
클릭
</buttion>
</div>
);
}
state를 사용해서 재렌더링 되도록 만들어야함

//사용예
const [변수명, set함수명] = useState(초기값);

useEffect
:side effect를 사용하기 위한 hook
: 의도치 않은 코드가 실행되면서 버그가 나타날 때
: react에서의 사이드 이펙트: 효과, 영향을 의미
: 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링 중에는 작업이 완료될 수 없기 때문
: 리액트의 함수 컴포넌트에서 side effect를 실행할 수 있게 해주는hook

//사용예
useEffect(이펙트 함수, 의존성 배열);

//effect function이 mount ,unmount 시에 단 한번씩만 실행되게 하고싶을때
useEffect(이펙트 함수, []);

//의존 배열을 생략하면 컴포넌트가 업데이트 될 때마다 호출됨

useEffect(()=>{
//컴포넌트가 마운트된 이후,
//의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
//의존성 배열에 빈 배열을 넣으면 마운트와 언마운트시에 단한번씩만 실행됨
//의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨

    return ()=>{
        //컴포넌트가 마운트 해제되기 전에 실행됨
    }

}, [의존성 변수1, 의존성 변수2, ...]
)
