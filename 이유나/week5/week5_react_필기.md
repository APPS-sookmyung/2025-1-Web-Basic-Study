## components와 Props의 정의

리액트는 component-based (컴포넌트 기반)

여러 컴포넌트로 전체 페이지 구성

입력 → React Component → 출력

Props → React Component → React element

### Props란?

컴포넌트에 전달한 다양한 정보를 담고 있는 자바스크립트 객체

Property : 속성

Component의 속성

ex. 붕어빵에 들어가는 재료 ( 팥, 슈크림, 고구마 )

### Props의 특징

1. Read-only

   값을 변경할 수 없다. ex. 붕어빵을 다 만들었는데 속재료를 바꿀 수 없음!

   새로운 값을 컴포넌트에 전달하여 새로 element를 생성

```jsx
fucntion withdraw(account, amount) {
    account.total -= amount ;
} //Impure한 함수
```

모든 리액트 컴포넌트는 Props를 직접 바꿀 수 없고, 같은 Props에 대해서는 항상 같은 결과를 보여줄 것!

### Props 사용법

```jsx
/*JSX사용, 추천*/
funtion App(props) {
    return (
        <Profile
            name="소플"
            introduction="안녕하세요, 소플입니다."
            viewCount={1500}  /*중괄호 사용과 아닌 것 구분*/
        />
    );
}
```

```jsx
/*JSX를 사용하지 않고*/
React.createElement(
  Profile,
  {
    name: "소플",
    introduction: "안녕하세요, 소플입니다.",
    viewCount: 1500,
  },
  null
);
```

### Component 만들기

1. Function component

```jsx
function Welcome(props) {
  return <h1>안녕, {props.name}</h1>;
}
```

2. Class component

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>안녕, {this.props.name}</h1>;
  }
}
```

### Component 이름

항상 대문자로 시작해야 한다

```jsx
const element = <Welcome name="인제" />;
```

### Component 렌더링

```jsx
function Welcome(props) {
  return <h1>안녕, {props.name}</h1>;
}

const element = <Welcome name="인제" />;
ReactDOM.render(element, document.getElementById("root"));
```

### Component 합성

Component안에 또 다른 Component 사용 가능

복잡한 화면을 여러 개의 Component로 나눠서 구현 가능

### Component 추출

큰 컴포넌트에서 일부를 추출

재사용성이 증가함.

Component가 작아질수록 기능과 목적이 분명해지고 Props가 단순해짐

개발 속도 또한 향상

1. Avatar 추출하기
2. Userinfo 추출하기

comment component > userinfo component > avatar component

## State and Lifecycle

state : 리액트 컴포넌트의 변경가능한 데이터

렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야 함

자바스크립트의 객체이다

직접 수정 할 수 없다 (하면 안된다)

```jsx
this.state = {
  liked: false,
};
```

Lifecycle : Component의 생명주기

컴포넌트가 계속 존재하는 것이 아니라, 시간의 흐름에 따라 생성되고 업데이트 되다가 사라진다

### Hooks (갈고리)

리액트의 함수 컴포넌트에서 side effect를 실행할 수 있게 해주는 HOOK

```jsx
import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}
```

```jsx
/*useEffect() 사용법*/
useEffect(이펙트 함수, 의존성 배열);

useEffect(() => {
  // 컴포넌트가 마운트 된 이후,
  // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
  // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
  // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
  ...

  return () => {
    // 컴포넌트가 마운트 해제되기 전에 실행됨
    ...
  };
}, [의존성 변수1, 의존성 변수2, ...]);
```

Function component

- State 사용 불가

- Lifescycle에 따른 기능 구현 불가

- Hooks

Class component

- 생성자에서 state를 정의

- setState() 함수를 통해 state 업데이트

- Lifecycle methods 제공

### Memoization

- useMemo() 사용법

```jsx
const memoizedValue = useMemo(
  () => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
    return computeExpensiveValue(의존성 변수1, 의존성 변수2);
  },
  [의존성 변수1, 의존성 변수2]
);
```

- 의존성 배열이 빈 배열일 경우, 컴포넌트 마운트 시에만 호출 됨

```jsx
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, []);
```

useMemo() Hook과 유사하지만 값이 아닌 함수를 반환

- useCallback() 사용법

```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(의존성 변수1, 의존성 변수2);
  },
  [의존성 변수1, 의존성 변수2]
);
```

- useRef()

```jsx
const refContainer = useRef(초깃값);
```

- callback ref()

```jsx
function MeasureExample(props) {
  const [height, setHeight] = useState(0);

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <h1 ref={measuredRef}>안녕, 리액트</h1>
      <h2>위 헤더의 높이는 {Math.round(height)}px 입니다.</h2>
    </>
  );
}
```

### Hook의 규칙

1. Hook은 무조건 최상위 레벨에서만 호출해야 한다
2. Hook은 컴포넌트가 렌더링 될 때마다 매번 같은 순서로 호출되어야 한다.

- 잘못된 사용법

```jsx
function MyComponent(props) {
  const [name, setName] = useState('Inje');

  if (name !== '') {
    useEffect(() => {
      ...
    });
  }

  ...
}
```

1. 리액트 함수 컴포넌트에서만 Hook을 호출해야 한다.

```jsx
const memoizedValue = useMemo(
  () => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
    return computeExpensiveValue(의존성 변수1, 의존성 변수2);
  },
  [의존성 변수1, 의존성 변수2]
);
```

### Custom Hook 만들기

```jsx
import React, { useState, useEffect } from "react";

function UserListItem(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    return () => {
      ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
    };
  }, []);

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.user.name}</li>
  );
}
```

이름이 use로 시작하고 내부에서 다른 Hook을 호출하는 하나의 자바스크립트 함수

```jsx
import { useState, useEffect } from "react";

function useUserStatus(userId) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ServerAPI.subscribeUserStatus(userId, handleStatusChange);
    return () => {
      ServerAPI.unsubscribeUserStatus(userId, handleStatusChange);
    };
  }, []);

  return isOnline;
}
```

### Custom Hook 사용하기

Custom Hook의 이름은 꼭 use로 시작해야 한다!

여러 개의 컴포넌트에서 하나의 Custom Hook을 사용할 때 컴포넌트 내부에 있는 모든 State와 effects는 전부 분리되어 있다.

각 Custom Hook 호출에 대해서 분리된 State를 얻게 됨

- Hook들 사이에서 데이터를 공유하는 방법

```jsx
const userList = [
  { id: 1, name: "Inje" },
  { id: 2, name: "Mike" },
  { id: 3, name: "Steve" },
];

function ChatUserSelector(props) {
  const [userId, setUserId] = useState(1);
  const isUserOnline = useUserStatus(userId);

  return (
    <>
      <Circle color={isUserOnline ? "green" : "red"} />
      <select
        value={userId}
        onChange={(event) => setUserId(Number(event.target.value))}
      >
        {userList.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </>
  );
}
```

## Handling event

사용자가 버튼을 클릭한 ‘사건’

버튼 클릭 ‘이벤트’

- DOM의 Event

```jsx
<button onclick="activate()">Activate</button>
```

- 리액트의 Event

```jsx
<button onclick={activate}>Activate</button>
```

### Event handler

어떤 사건이 발생하면, 사건을 처리하는 역할

### Event listenler

```jsx
class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "켜짐" : "꺼짐"}
      </button>
    );
  }
}
```

### Argument

함수에 전달할 데이터

Event handler에 전달한 데이터

```jsx
function MyButton(props) {
  const handleDelete = (id, event) => {
    console.log(id, event.target);
  };

  return <button onClick={(event) => handleDelete(1, event)}>삭제하기</button>;
}
```

2주차 리액트 끝
