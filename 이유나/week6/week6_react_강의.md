# 3주차 React

## 9강 conditional rendering

### condition?

어떠한 조건에 따라서 렌더링이 달라지는 것

```jsx
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```

### Boolean 자료형

Truthy : true는 아니지만 true로 여겨지는 값

Falsy : false는 아니지만 false로 여겨지는 값

```jsx
// truthy
true
{}          // (empty object)
[]          // (empty array)
42          // (number, not zero)
"0", "false" // (string, not empty)

// falsy
false
0, -0       // (zero, minus zero)
0n          // (BigInt zero)
'', "", ``  // (empty string)
null
undefined
NaN         // (not a number)
```

### Element variables

```jsx
function LoginControl(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
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
  );
}
```

### Inline conditions

조건문을 코드 안에 집어넣는 것

IF문의 경우 && 연산자를 사용

true && expression → expression

false && expression → false

```jsx
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;

  return (
    <div>
      <h1>안녕하세요!</h1>
      {unreadMessages.length > 0 && (
        <h2>
          현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.
        </h2>
      )}
    </div>
  );
}
```

If-else문의 경우 ? 연산자를 사용

condition ? true : false

```jsx
<div>
  <Greeting isLoggedIn={isLoggedIn} />
  {isLoggedIn
    ? <LogoutButton onClick={handleLogoutClick} />
    : <LoginButton onClick={handleLoginClick} />
  }
</div>
```

### component 렌더링 막기

null을 리턴하면 렌더링되지 않음

```jsx
function WarningBanner(props) {
  if (!props.warning) {
    return null;
  }

  return (
    <div>경고!</div>
  );
}
```

## 10강 List and keys

array : js의 변수나 객체들을 하나의 변수로 묶어 놓은 것

```jsx
const numbers = [1, 2, 3, 4, 5];
```

key : 각 객체나 아이템을 구분할 수 있는 고유한 값

   아이템들을 구분하기 위한 고유한 문자열

### 여러 개의 component 렌더링 하기

map()

```jsx
const doubles = numbers.map((number) => number*2);
```

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

- 기본적인 List component

```jsx
function NumberList(props) {
  const { numbers } = props;

  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

### List의 Key

아이템들을 구분하기 위한 고유한 문자열

Key의 값은 같은 List에 있는 Elements사이에서만 고유한 값이면 된다

ex. 두 대학교 사이에서는 학번이 같아도 상관없음!
      두 List 사이에서는 Key가 같아도 상관없음!

- Key로 값을 사용하는 경우

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

- Key로 id를 사용하는 경우

```jsx
const todo Items = todos.map((todo) =>
	<li key={todo.id}>
			{todo.text}
	</li>
);
```

- Key로 index를 사용하는 경우

```jsx
const todoItems = todos.map((todo, index) =>
  // 아이템들의 고유한 ID가 없을 경우에만 사용해야 함
  <li key={index}>
    {todo.text}
  </li>
);
```

*map() 함수 안에 있는 Elements는 꼭 key가 필요하다!

## 11강 forms

form : 양식, 사용자로부터 입력을 받기 위해 사용

Controlled Components : 값이 리액트의 통제를 받는 Input Form Element, 모든 데이터를 state에서 관리

HTML form : 자체적으로 state를 관리

```jsx
function NameForm(props) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('입력한 이름: ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}
```

*사용자의 입력을 직접적으로 제어할 수 있음!

ex. 모든 입력값을 대문자로 변경

```jsx
const handleChange = (event) => {
  setValue(event.target.value.toUpperCase());
}
```

### 다양한 Forms

- textarea 태그

여러 줄에 걸쳐 긴 텍스트를 입력받기 위한 HTML 태그

```jsx
<form onSubmit={handleSubmit}>
  <label>
    요청사항:
    <textarea value={value} onChange={handleChange} />
  </label>
  <button type="submit">제출</button>
</form>
```

- Select 태그

Drop-down 목록을 보여주기 위한 HTML 태그

```jsx
<select value={value} onChange={handleChange}>
  <option value="apple">사과</option>
  <option value="banana">바나나</option>
  <option value="grape">포도</option>
  <option value="watermelon">수박</option>
</select>
```

- file input 태그

디바이스의 저장 장치로부터 하나 또는 여러 개의 파일을 선택할 수 있게 해주는 HTML 태그

- Uncontrolled Component
- Multiple inputs

여러 개의 state를 선언하여 각각의 입력에 대해 사용

## 12강 lifting state up

- shared state

state에 있는 데이터를 여러 개의 하위 컴포넌트에서 공통적으로 사용하는 경우

하위 컴포넌트가 공통된 부모 컴포넌트의 state를 공유하여 사용하는 것

### 하위 컴포넌트에서 state 공유하기

물의 끓음 여부를 알려주는 컴포넌트

```jsx
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>물이 끓습니다.</p>;
  }
  return <p>물이 끓지 않습니다.</p>;
}
```

- 입력 컴포넌트 추출하기

```jsx
function Calculator(props) {
  return (
    <div>
      <TemperatureInput scale="c" />
      <TemperatureInput scale="f" />
    </div>
  );
}
```

### 온도 변환 함수 작성하기

```jsx
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
```

```jsx
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
```

### shared state 적용하기

하위 컴포넌트의 state를 공통 상위 컴포넌트로 올림

```jsx
return (
  ...
  // 변경 전: <input value={temperature} onChange={handleChange} />
  <input value={props.temperature} onChange={handleChange} />
  ...
);

const handleChange = (event) => {
  // 변경 전: setTemperature(event.target.value);
  props.onTemperatureChange(event.target.value);
};
```

### calculator 컴포넌트 변경하기

```jsx
<TemperatureInput
  scale="c"
  temperature={celsius}
  onTemperatureChange={handleCelsiusChange}
/>
<TemperatureInput
  scale="f"
  temperature={fahrenheit}
  onTemperatureChange={handleFahrenheitChange}
/>
```

## 13강 composition vs inheritance

composition? 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것

여러개의 컴포넌트들을 어떻게 조합할 것인가? containment

sidebar나 dialog 같은 box 형태의 컴포넌트는 자신의 하위 컴포넌트를 미리 알 수 없다

- children prop을 사용한 fancyborder 컴포넌트

```jsx
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```

*fancyborder 컴포넌트 안에 있는 모든 JSX 태그는 children으로 전달됨!

### 여러 개의 children 집합이 필요한 경우는 어떻게 할까?

```jsx
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App(props) {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      }
    />
  );
}
```

welcomedialog는 dialog의 특별한 케이스이다

기존의 객체지향 언어에서는 상속(inheritance)을 사용하여 specialization을 구현

```jsx
function Dialog(props) {
  return (
    <FancyBorder color="blue">
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
      message="우리 사이트에 방문하신 것을 환영합니다!"
    />
  );
}
```

### containment와 specialization을 같이 사용하기

```jsx
<Dialog
  title="화성 탐사 프로그램"
  message="닉네임을 입력해 주세요."> //specialization
  
  <input
    value={nickname}
    onChange={handleChange} />
    
  <button onClick={handleSignUp}>
    가입하기
  </button> //containment
</Dialog>
```

상속? 다른 컴포넌트로부터 상속을 받아서 새로운 컴포넌트를 만드는 것

## 14강 Context

컴포넌트의 props를 통한 데이터 전달

여러 개의 Component들이 접근해야 하는 데이터

로그인 여부, 로그인 정보, UI 테마, 현재 언어 등…

```jsx
function App(props) {
  return <Toolbar theme="dark" />;
}

function Toolbar(props) {
  // 이 Toolbar 컴포넌트는 ThemedButton에 theme을 넘겨주기 위해서 'theme' prop을 가져야만 합니다.
  // 현재 테마를 알아야 하는 모든 버튼에 대해서 props로 전달하는 것은 굉장히 비효율적입니다.
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

function ThemedButton(props) {
  return <Button theme={props.theme} />;
}
```

```jsx
// 컨텍스트는 데이터를 매번 컴포넌트를 통해 전달할 필요 없이 컴포넌트 트리로 곧바로 전달하게 해줍니다.
// 여기에서는 테마 데이터를 위한 컨텍스트를 생성하며, 기본값은 'light'입니다.
const ThemeContext = React.createContext('light');

// Provider를 사용하여 하위 컴포넌트들에게 현재 테마 데이터를 전달합니다.
// 모든 하위 컴포넌트들은 컴포넌트 트리 하단에 얼마나 깊이 있는지에 관계없이 데이터를 읽을 수 있습니다.
// 여기에서는 전달된 테마값으로 'dark'를 설정하고 있습니다.
function App(props) {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// 이제 중간에 위치한 컴포넌트는 테마 데이터를 하위 컴포넌트로 전달할 필요가 없습니다.
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton(props) {
  // 리액트는 트리상 가장 가까운 상위에서 Provider를 찾아서 해당되는 값을 사용합니다.
  // 만약 일치하는 Provider가 없을 경우 기본값(여기서는 'light')을 사용합니다.
  // 여기에서는 상위에 Provider가 있기 때문에 현재 테마 값은 'dark'가 됩니다.
  return (
    <ThemeContext.Consumer>
      {value => <Button theme={value} />}
    </ThemeContext.Consumer>
  );
}
```

### Context를 사용하기 전에 고려할 점

```jsx
// Page 컴포넌트는 PageLayout 컴포넌트를 렌더링
<Page user={user} avatarSize={avatarSize} />

// PageLayout 컴포넌트는 NavigationBar 컴포넌트를 렌더링
<PageLayout user={user} avatarSize={avatarSize} />

// NavigationBar 컴포넌트는 Link 컴포넌트를 렌더링
<NavigationBar user={user} avatarSize={avatarSize} />

// Link 컴포넌트는 Avatar 컴포넌트를 렌더링
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>
```

```jsx
function Page(props) {
  const user = props.user;

  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );

  // Page 컴포넌트는 PageLayout 컴포넌트를 렌더링
  // 이때 props로 userLink를 함께 전달함
  return <PageLayout userLink={userLink} />;
}

// PageLayout 컴포넌트는 NavigationBar 컴포넌트를 렌더링
<PageLayout userLink={...} />

// NavigationBar 컴포넌트는 props로 전달받은 userLink element를 리턴
<NavigationBar userLink={...} />
```

하위 컴포넌트를 여러 개의 변수로 나눠서 전달!

### context API

```jsx
const MyContext = React.createContext(기본값);
```

만약 상위 레벨에 매칭되는 Provider가 없다면 기본값이 사용 됨!

기본값으로 undefined를 넣으면 기본값이 사용되지 않음

### Context.Provider

- provider 사용

```jsx
<MyContext.Provider value={/*some value*/}>
```

### Provider value에서 주의해야 할 사항

Provider 컴포넌트가 재렌더링될 때마다 모든 하위 comsumer 컴포넌트가 재렌더링 됨

Class.contextType

```jsx
class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* MyContext의 값을 이용하여 원하는 작업을 수행 가능 */
  }

  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }

  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }

  render() {
    let value = this.context;
    /* MyContext의 값에 따라서 컴포넌트들을 렌더링 */
  }
}

MyClass.contextType = MyContext;
```

### context.Consumer

```jsx
<MyContext.Consumer>
  {value => 
    /* 컨텍스트의 값에 따라서 컴포넌트들을 렌더링 */
  }
</MyContext.Consumer>
```

- function as a child를 사용하는 방법

```jsx
// children이라는 prop을 직접 선언하는 방식
<Profile children={name => <p>이름: {name}</p>} />

// Profile 컴포넌트로 감싸서 children으로 만드는 방식
<Profile>{name => <p>이름: {name}</p>}</Profile>
```

### 여러개의 context 사용하기

```jsx
// 테마를 위한 컨텍스트
const ThemeContext = React.createContext('light');

// 로그인 한 사용자를 위한 컨텍스트
const UserContext = React.createContext({
  name: 'Guest',
});

class App extends React.Component {
  render() {
    const { signedInUser, theme } = this.props;

    // App component that provides initial context values
    return (
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}
```

### useContext()

```jsx
function MyComponent(props) {
  const value = useContext(MyContext);

  return (
    ...
  );
}
```

3주차 리액트 강의 끝!