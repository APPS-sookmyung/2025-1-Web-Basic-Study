# 6주차 강의 내용 정리

## 9강 : Conditional Rendering
### Conditional Rendering
- Conditional Rendering : 조건부 렌더링
- 조건에 따라서 렌더링이 달라지는 것
- ex. True이면 버튼을 보여주고, False이면 버튼을 숨긴다.
```javascript
function UserGreeting(props) {
    return <h1>다시 오셨군요!</h1>;
}

function GuestGreeting(props) {
    return <h1>회원가입을 해주세요.</h1>;
}
```
- 회원인지 아닌지에 따라 두 개의 컴포넌트 중 하나를 보여준다.
```javascript
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
```

### JavaScript의 Truthy, Falsy
- Truthy : true는 아니지만 true로 여겨지는 값  
true, empty object {}, empty array [], 0이 아닌 수, 비어있지 않은 string
- Flasy : false는 아니지만 false로 여겨지는 값  
false, 0, -0, BigInt zero 0n, 빈 스트링 '' "" ``, null, undefined, NaN

### Element Variables
- React Element를 변수처럼 다루는 방법
```javascript
function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //useState로 설정한 값이 변경되면 화면이 다시 렌더링됨

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    let button; //이 변수에 Element 넣어서 return문에서 렌더링
    if (isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
        button = <LoginButton onClick={handleLoginClick} />;
    }

    return ( 
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    )
}
```
- 로그인 여부 (isLoggedIn의 값)에 따라 LoginButton 또는 LogoutButton을 선택적으로 보여줌
- 변수 button : Element Variable

### Inline Condition - Inline if
- 조건문을 코드 안에 집어넣는 것
- Inline if : && 연산자 사용  
true && expression -> expression  
false && expression -> false
```javascript
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;

    return (
        <div>
            <h1>안녕하세요!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.
                </h2>
            }
        <div>
    )
}
```
- unreadMessages.length > 0 이면 && 뒤의 태그가 렌더링되고, <= 0이면 렌더링되지 않음
```javascript
function Counter(props) {
    const count = 0;

    return (
        <div>
            {count && <h1>현재 카운트: {count}</h1>}
        </div>
    );
}
```
- 주의할 점 : count == 0 이어도 렌더링되지 않는 것이 아닌, `<div>0</div>` 가 렌더링됨  
(false && expression -> false 이기 때문)

### Inline Condition - Inline if-else
- Inline if-else : ? 연산자 사용  
condition? true : false
```javascript
function UserStatus(props) {
    return (
        <>
        <div> <!--조건에 따라 다른 문자열 출력-->
            이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}</b> 상태입니다.
        </div>
        <div> <!--문자열 대신 element도 가능-->
            {props.isLoggedIn
                ? <LogoutButton />
                : <LogInButton />
            }
        </div>
        </>
    )
}
```
- props.isLoggedIn의 값에 따라 다른 문자열을 출력

### Component 렌더링 막기
- null을 리턴하면 렌더링되지 않음
```javascript
function WarningBanner(props) {
    if (!props.warning) {
        return null;
    }

    return (
        <div>경고!</div>
    );
}
```

### (실습) 로그인 여부를 나타내는 툴바 만들기

## 10강 : List and Keys
### 여러 개의 Component 렌더링하기
- map() : 원소들에 대해 반복적으로 연산 수행 후 새로운 배열 리턴 
- 배열 numbers의 원소들에 모두 2를 곱한 새로운 배열을 리턴함
```javascript
const doubled = numbers.map((number) => number *2);
```  

- react element에 map 함수 사용하기
- 각 숫자를 li 태그로 감싼다 -> 총 5개의 element가 생성됨
```javascript
fuction NumberList(props) {
    const {numbers} = props;

    const listItems = numbers.map((number) =>
    <li key={number.toString()}> <!--key값 반드시 존재해야 함-->
        {number}
    </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1,2,3,4,5];
ReactDOM.render(
    <NumberList numbers={numbers} />
    document.getElementById('root')
);
```
- key : 아이템들을 구분하기 위한 고유한 문자열  
key값은 같은 list의 element끼리만 고유하면 됨 (두 대학교 사이에는 같은 학번이 존재해도 되는 것처럼)
- map() 안에 있는 element들은 반드시 key가 있어야 함

### (실습) 출석부 출력하기

## 11강 : Form
### Controlled Components
- 양식. 사용자로부터 입력 받기 위해 사용
- Controlled Components : 값이 리액트의 통제를 받은 Input Form Element  
HTML Form과는 다르게 모든 데이터를 state에서 관리. useState 사용
```javascript
function RequestForm(props) {
    const [value, setValue] = useState('요청사항을 입력하세요.');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert.('입력한 요청사항: ' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                요청사항:
                <textarea value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
```
- 입력받은 내용을 value라는 state로 관리
- event.target.value : event가 발생한 객체의 value
- input, file input, textarea, select 태그 등

### Input Null Value
```javascript
ReactDOM.render(<input value="hi">, rootNode);

setTimeout(function() {
    ReactDOM.render(<input value={null} />, rootNode);
}, 1000);
```
- 처음에는 input 값이 hi로 정해져 있어서 입력 불가, 1초 후에 입력 가능한 상태가 됨

### (실습) 사용자 정보 입력받기

## 12강 : Lifting State Up
- Shared State : 하위 컴포넌트들이 부모 컴포넌트의 state를 공유하여 사용하는 것
- Lifting State Up : 하위 컴포넌트의 State를 상위 컴포넌트로 끌어올리는 것

### (실습) 섭씨온도와 화씨온도 표시하기

## 13강 : Composition vs Inheritance
### Composition
- 여러 개의 컴포넌트를 조합하는 것

- Containment
    - 하위 컴포넌트를 포함하는 형태의 합성 방법
    - children이라는 props를 사용 (리액트가 기본적으로 제공해주는 props)
    ```javascript
    function FancyBorder(props) {
        return (
            <div className={'FancyBorder FancyBorder-' + props.color}>
                {props.children}
            </div>
        );
    }
    ```
    ```javascript
    function WelcomeDialog(props) {
        return (
            <FancyBorder color="blue>
                <h1 className="Dialog-title">
                    어서오세요
                </h1>
                <p className="Dialog-message">
                    사이트 방문을 환영합니다
                </p>
            </FancyBorder>
        );
    }
    ```
    - FancyBorder 컴포넌트 안에 있는 모든 jsx 태그는 children으로 전달됨
    - 단, 여러 개의 children 집합이 필요한 경우에는 props 직접 정의하여 사용해야 함

- Specialization 
    - 범용적인 개념을 구별이 되게 구체화하는 것
    - 객체지향 언어에서는 상속(Inheritance)을 이용하여 구현하지만, 리액트에서는 composition 이용하여 구현
    ```javascript
    function Dialog(props) {
        return(
            <FancyBorder color="blue>
                <h1 className="Dialog-title">
                    {props.title}
                </h1>
                <p className="Dialog-message">
                    {props.message}
                </p>
            </FancyBorder>
        );
    }

    function WelcomeDialog(props) {
        return (
            <Dialog 
                title="어서 오세요"
                message="사이트 방문을 환영합니다"
            />
        );
    }
    ```
    
- Containment와 Specialization을 같이 사용할수도 있음
- Inheritance : 사용 가능하지만 추천하지 않음

### (실습) Card 컴포넌트 만들기

## 14강 : Context
### Context
- 컴포넌트의 props를 통한 데이터 전달  
단방향 (부모->자식), 데이터 전달 많아질 경우 코드 복잡해지고 비효율적 -> Context 사용
- 일일히 props로 전달하지 않고, 데이터를 한 곳에서 관리하여 데이터를 필요로 하는 컴포넌트에 바로 전달해줄 수 있음
- 여러 개의 컴포넌트들이 전달받아야 하는 데이터가 있을 때 사용 (ex. 로그인 여부, ui 테마, 현재 언어 등)
```javascript
const ThemeContext = React.createContext('light');

function App(props) {
    return (
        <ThemeContext.Provider value='dark'>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton>
        </div>
    );
}

function ThemedButton(props) {
    return (
        <ThemedContext.Consumer>
            {value => <Button theme={value} />}
        </ThemeContext.Consumer>
    );
}
```
- Provider : 하위 컴포넌트들에게 현재 테마 데이터 전달
- Consumer : 가장 가까운 상위 Provider 찾아서 해당되는 데이터 사용

### Context API
- Context 생성 `const MyContext = React.createContext(기본값);`  
상위 레벨에 매칭되는 Provider가 없으면 기본값이 사용됨
- Provider 사용 `<Mycontext.Provider value={...}>`  
주의점 : Provider 컴포넌트가 재렌더링 될 때마다 모든 하위 컴포넌트가 재렌더링 됨
- Consumer 사용 `<MyContext.Consumer> {value => ... } </MyContext.Consumer>`

- function as a child : 컴포넌트의 자식으로 함수를 사용
- 여러 개의 context 사용하기: Provider, Consumer를 중첩해서 사용

- Provider, Consumer 사용하는 대신 hook 중 하나인 useContext() 사용하는 방법도 있음
```javascript
function MyComponent(props) {
    const value = useContext(MyContext);

    return (
        ...
    );
}
```

### (실습) Context를 사용하여 테마 변경 기능 만들기
