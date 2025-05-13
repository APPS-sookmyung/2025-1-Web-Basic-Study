# 4주차 강의 내용 정리
## 0강 : 준비하기
- SPA : Single Page Application
    - React로 SPA 개발 가능
- JavaScript 
    - Dynamic Typing (동적 타이핑) : var
    - 자료형 : number, String, boolean, null, undefined, array, object
        - undefined : 변수가 선언만 되고 값 대입되지 않았을 때
        - object : key, value 로 이루어짐 (map, dictionary와 유사)
    - 함수 : function statement, arrow function exrpession

## 1강 : 리액트 소개 
- 프레임워크 vs 라이브러리
    - 프레임워크 : 흐름에 대한 제어 가능
    - 라이브러리 : 흐름에 대한 제어가 개발자에게 있음
- 빠른 업데이트, 렌더링 속도
- Virtual DOM  
    - DOM : Document Object Model
    - State Change 일어나면, 변경해야 하는 부분만 찾아서 변경
- Component-Based
- Reusability

## 2강 : 리액트 시작하기
- 직접 리액트 연동하기
    - index.html 에 `<div id="root"></div>` 추가 (DOM Container)
- create-react-app
    - React 프로젝트 생성해줌 (Spring intializer 느낌)
    - 터미널에 npm start 입력 (종료 시 Ctrl+C)

## 3강 : JSX

### JSX의 정의와 역할
- JSX : 자바스크립트의 확장 문법
- JavaScript + XML / HTML
- `const element = <h1>Hello, World!</h1>;`
-  React.createElement 함수 : JSX 코드를 js 코드로 변환
- JSX를 사용한 코드
    ``` 
    class Hello extends React.Component { 
	render(){
    	return <div>Hello {this.props.toWhat} </div>;
        }
    }
    ReactDOM.render(
	    <Hello thWhat= "World" />,
        document.getElementById('root')
    ); 
    ```
- JSX를 사용하지 않은 코드
    ``` 
    class Hello extends React.Component { 
	    render(){
    	    return React.createElement('div', null, `Hello ${this.props.thWhat}`);
        }
    }
    ReactDOM.render(
	    React.createElement(Hello, { toWhat: 'World'}, null),
        document.getElementById('root')
    );
    ``` 
- JSX 사용하면 내부적으로 React.createElement 실행 -> React Element 객체 생성됨
- React.createElement 
    - 파라미터 type : html 태그 또는 다른 React Element
    - props : 속성 (클래스, 스타일 등 ...)
    - children : 현재 element 가 포함하고 있는 자식 element
- JSX 쓰는 것이 필수는 아니지만, JSX 사용해야 생산성, 가독성 좋음

### JSX의 장점 및 사용법
- 장점 : 가독성 향상, 유지보수 편리, injection Attacks 방어
- html 태그 사이에 js 코드 넣으려면, { } 사이에
- 태그의 속성에 값 넣기 : " " 사이에 문자열 넣거나, { } 사이에 js 코드 넣기  
`<div tabIndex="0"></div>` `<img src={user.avatarUrl}></img>`

## 4강 : Rendering Elements
### React Elements의 정의와 생김새
- React 앱의 가장 작은 블럭
- React Element vs DOM Element
- React Element가 렌더링되어 DOM Element가 된다
- React Element
    - 자바스크립트 객체 형태로 존재함
    - 한 번 생성되면 바꿀 수 없음

### React Elements의 특징 및 렌더링
- Immutable : 불변성 가짐
- Elements 생성 후에는 children이나 attributes를 바꿀 수 없다 
- 붕어빵 : Element, 붕어빵 틀 : Component
- 화면 갱신이 필요할 때, 새로운 Element 만들어서 바꿔 끼운다
- Root DOM Node `<div id="root"></div>`
- 렌더링된 element를 업데이트 하기 : 매번 Element를 새로 만든다

### (실습) 시계 만들기
- React 18 버전에서는 강의와 같은 ReactDOM.render 지원 X
- 아래와 같이 상수 root 정의 후 root.render 사용
```
const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);
```