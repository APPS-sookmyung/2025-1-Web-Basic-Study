hook은 무조건 최상위 레벨에서만 호출해야함

반복문이나 조건문 중첩문에서 호출해선 안됨

훅은 컴포넌트가 렌더링될 때마다 매번 같은 순서로 호출되어야함

//잘못된 사용법
function MyComponent(props){
const [name, setName]=useState("영교")

    if (name!= ''){
        useEffect(()=>{

        });
    }
    }

리액트 함수 컴포넌트에서만 훅을 호출해야한다.

eslint-plugin-react-hooks
:코드 분석 도구

custom hook 만들기
:이름이 use로 시작하고 내부에서 다른 훅을 호출하는 하나의 자바스크립트 함수

여러 개의 컴포넌트에서 하나의 custom hook을 사용할 때 컴포넌트 내부에 있는 모든 state와 effects는 전부 분리되어있음

-> 각 custom hook호출에 대해서 분리된 state를 갖게 됨
각 custom hook의 호출또한 완전히 독립적적
