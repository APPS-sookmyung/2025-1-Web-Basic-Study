# 5주차 강의 내용 정리

## 5강 : Components and Props
### Components
- 하나의 컴포넌트는 여러 컴포넌트로 이루어질 수 있다
- 컴포넌트들이 모여 한 페이지를 만든다
- React Component 는 하나의 함수와 유사 : 입력은 Props, 출력은 React Element
- React Element : 가장 작은 빌딩 블록
- React Component와 Element : 객체 지향 언어에서의 클래스, 인스턴트의 관계와 유사

### Props
- Component의 속성
- 붕어빵의 재료
- props : 컴포넌트에 전달할 다양한 정보를 담고 있는 js 객체

### Props의 특징
- Read-Only : Element 생성 도중 값을 변경할 수 없다
- js 함수의 속성
    - Pure : 입력 값을 변경하지 않으며, 같은 입력값에 대해서는 항상 같은 출력
    - Impure
- 모든 React Component는 그들의 Props에 대해 Pure 함수와 같은 역할을 해야 함  
    => Props를 직접 바꿀 수 없으며, 같은 Props에 대해서는 항상 같은 결과를 보여줌

### Component 만들기 및 렌더링
- Component 종류 : Function Component, Class Component
- Function Component 주로 사용
- Component 렌더링 : Component를 통해 만들어진 Element가 렌더링 되는 것
- Component 이름 : 반드시 대문자로 시작해야 함  
    `const element = <div />;`  
    HTML div 태그로 인식. DOM 태그를 사용한 Element    
    `const element = <Welcome name="인제 />;`  
    Welcome이라는 이름의 React Component로 인식. 사용자가 정의한 Component를 사용한 Element  
```javascript
function Welcome(props) {
    return <h1>안녕, {props.name}</h1>;
}

const element = <Welcome name="인제" />;
ReactDOM.render(
    element,
    document.getElementById('root)
);
```
### Component 합성
- 컴포넌트 안에 컴포넌트를 넣을 수 있다.
- App 컴포넌트 안에 Welcome 컴포넌트 3개
```javascript
function App(props) {
    return (
        <div>
            <Welcome name="Mike" />
            <Welcome name="Steve" />
            <Welcome name="Jane" />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```
- 컴포넌트 간단할수록 재사용성, 개발 속도 향상됨
- 복잡한 Component로부터 간단한 Component를 추출하기
    - 주로 기능 단위로 추출, 재사용이 가능하도록
    - 재사용 가능한 컴포넌트 많을수록 개발 속도 빨라짐

### (실습) 댓글 컴포넌트 만들기
- map 함수와 배열을 이용하여 여러 개의 Comment 컴포넌트를 CommentList 컴포넌트 안에 생성

## 6강 : State and Lifecycle
### State
- React Component의 상태, 변경 가능한 데이터
- State는 개발자가 직접 정의
- 렌더링이나 데이터 흐름에 사용되는 값만 State에 포함 (State가 변경되면 컴포넌트가 다시 렌더링되므로)
- State는 자바스크립트 객체
- 클래스 컴포넌트: 생성자에서 정의, 함수 컴포넌트: useState에서 정의
```javascript
class LikeButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            liked: false
        };
    }
}
```
- this.setState 함수를 통해 수정 (자바의 Setter처럼)

### Lifecycle
- Lifecycle : 주로 Class Component에서만 사용 
- React Component의 생명 주기
- Mounting -> Updating -> Unmounting
- Mounting
    - Component의 Constructor 실행
    - rendering
    - componentDidMount
- Updating
    - New props / setState() / forceUpdate() 
    - rendering
    - componentDidUpdate
- Unmounting 
    - 상위 컴포넌트가 이 컴포넌트를 더 이상 화면에 표시하지 않을 때
    - componentWillUnmount

### (실습) state 사용하기

## 7강 : Hooks
- Function Component
    - state 사용 불가
    - LifeCycle에 따른 기능 구현 불가
    - -> Hook을 통해 해결
- 개발자가 직접 Hook 정의도 가능

### useState()
- state를 사용하기 위한 Hook
- `const [변수명, set함수명] = useState(초기값);`

### useEffect()
- Side Effect를 수행하기 위한 Hook
- Side Effect: 효과, 영향. 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링 중에는 작업이 완료될 수 없음
- `useEffect(이펙트 함수, 의존성 배열);`
- 의존성 배열의 값이 하나라도 수정되면 이펙트 함수 호출됨
- 의존성 배열 샡략 시 컴포넌트가 업데이트될 때마다 이펙트 함수 호출됨
- `useEffect(이펙트 함수, []);` Effect funtion이 mount, unmount시에 각각 한 번씩 실행됨
```javascript
function Counter(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You Clicked ${count} times`;
    })

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count+1)}>
            클릭
            </button>
        </div>
    );
}
```

### useMemo()
- Memoized value를 리턴하는 Hook
- Memoization
    - 연산량이 많은 함수의 호출 결과를 저장해 두었다가, 같은 입력값을 넣으면 저장해두었던 호출 결과를 반환
    - 저장해둔 호출 결과를 Memoized value라고 함
```javascript
const memoizedValue = useMemo(
    () => {
        return computeExpensiveValue(의존성 변수1, 의존성 변수2);
    },
    [의존성 변수1, 의존성 변수2]
);
```
- 컴포넌트 다시 렌더링될 때, 연산량 많은 작업 반복하는 것을 피할 수 있음 -> 빠른 렌더링
- 렌더링이 일어나는 동안 실행되므로 렌더링동안 실행되면 안되는 작업을 useMemo에 쓰면 안됨
- 의존성 배열을 넣지 않을 경우, 매 렌더링마다 함수가 실행됨 -> useMemo 사용하는 의미가 없음
- 의존성 배열이 빈 배열일 경우, 컴포넌트 마운트 시에만 호출됨

### useCallback()
- useMemo() Hook과 비슷하지만 값이 아닌 함수를 반환
```javascript
const memoizedCallback = useCallback(
    () => {
        doSomething(의존성 변수1, 의존성 변수2);
    },
    [의존성 변수1, 의존성 변수2]
);
```
### useRef()
- Reference를 사용하기 위한 Hook 
- Reference : 특정 컴포넌트에 접근할 수 있는 객체
- refObject.current : 현재 참조하고 있는 Element
- html 태그의 ref 속성과 유사
- useRef() Hook은 내부의 데이터가 변경되어도 별도로 알리지 않음  
    -> Callback Ref 으로 해결

### Hook의 규칙
- Hook은 최상위 레벨에서만 호출해야 함
    - Hook은 컴포넌트가 렌더링될 때마다 매번 같은 순서로 호출되어야 함
- 리액트 함수 컴포넌트에서만 Hook을 호출해야 함
    - 일반 js 함수에서 Hook 호출하면 안됨
- eslint-plugin-react-hooks : hook이 규칙 따르도록 도와주는 플러그인

### Custom Hook 만들기
- 여러 컴포넌트에서 공통적으로 사용되는 로직을 Hook으로 만들어 재사용
- **이름이 use로 시작하고** 내부에서 다른 Hook을 호출하는 하나의 js 함수
- 여러 개의 컴포넌트에서 하나의 Custom Hook을 사용해도, 컴포넌트 내부에 있는 State, Effect들은 모두 분리되어 있음
- 각 Custom Hook의 호출은 완전히 독립적임

### (실습) Hooks 사용해보기

## 8강 : Handling Events
### Event
- 버튼 클릭과 같은 이벤트를 처리하는 것 -> 이벤트 핸들링
- DOM의 Event 처리 : 태그의 onclick 속성으로 
```html
<button onclick="activate()">
    Activate
</button>
```
- React의 Event 처리
```html
<button onClick={activate}>
    Activate
</button>
```
- Event Handler 정의 방법 (Class Component)
    - 함수 형태로 Event Handler 정의 후 Constructor에서 binding 해주어야 함
    - 또는 Class Field Syntax 사용
    - 또는 html 태그의 OnClick 속성에서 Arrow Function 사용 (권장 X)
- Event Handler 정의 방법 (Function Component)
    - 함수 안의 함수로 정의
    - 또는 arrow function을 사용하여 정의
- Event Handler에 argument(= parameter) 전달하는 방법
```javascript
function MyButton(props) {
    const handleDelete = (id, event) => {
        console.log(id, event.target);
    };

    return (
        <button onClick={(event) => handleDelete(1, event)}>
            삭제하기
        </button>
    );
}
```

### (실습) 클릭 이벤트 처리하기