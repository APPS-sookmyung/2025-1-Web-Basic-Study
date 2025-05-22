## 9강. Conditional Rendering

### Conditional Rendering의 정의와 Inline Conditions

#### Conditional Rendering의 정의

- Condition = 조건

- Conditional Rendering: 조건에 따른 렌더링, 즉 조건부 렌더링
  - 어떠한 조건(조건문의 True, False)에 따라 렌더링이 달라지는 것

#### JavaScript의 Truthy와 Falsy

- Truthy: JavaScript에서 true는 아니지만 true로 여겨지는 값

  - true

  - {} (빈 객체)

  - [] (빈 배열)

  - 42 (0이 아닌 숫자)

  - "0", "false" (비어있지 않은 문자열)

- Falsy: JavaScript에서 false는 아니지만 false로 여겨지는 값

  - false

  - 0, -0 (0, 음수 0)

  - 0n (BigInt 0)

  - '', "", `` (빈 문자열)

  - null

  - undefined

  - NaN (숫자가 아님)

#### Element Variables

- 조건부 렌더링에서 렌더링 해야하는 컴포넌트를 변수처럼 다루는 방법

#### Inline Conditions

- 조건문을 코드 안에 집어넣는 것

##### Inline If: && 논리 연산자를 사용하여 조건부 렌더링을 구현[단축 평가]

- 리액트는 && 왼쪽 값이 true면 오른쪽의 expression이 결과값이 됨

- 왼쪽 값이 false면 결과 값도 false가 됨

##### Inline If-Else: 삼항[?] 연산자를 사용하여 조건부 렌더링을 구현

**null 리턴: component 렌더링 안됨**

## 10강. List and Keys

### 1. List와 Key

#### List

- 같은 아이템을 순서대로 모아놓은 것

- 리스트를 구현하기 위해 사용하는 자료구조는 **Array(배열)**

- [JavaScript] 배열= 변수나 객체들을 하나의 변수로 묶어놓은 것

```javascript
const numbers = [1, 2, 3, 4, 5];
```

#### Key

- 각 객체나 아이템을 구분할 수 있는 고유한 값

- [React] 아이템을 구분하기 위한 고유한 문자열

### 2. 여러 개의 Component 렌더링 하기

- [React] 배열을 사용해 리스트 형태로 엘리먼트들을 렌더링함. 주로 map() 함수 활용.

```javascript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);

// 렌더링
return <ul>{listItems}</ul>;
```

> 하지만 코드 실행 시 "리스트의 각 항목에 key를 넣어야 한다"는 경고가 표시됨

### 3. List의 Key

#### Key의 특성과 중요성

- React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것 도움

- 같은 List에 있는 Elements 사이에서만 고유한 값이면 됨. 서로 다른 리스트 간에는 key 값이 중복되어도 됨.

#### Key 값 지정 방법

```javascript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => (
  <li key={number.toString()}>{number}</li>
));
```

- 배열의 값 중복되면 key 값도 중복

#### ID를 key로 사용하는 방법 (권장):

```javascript
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
```

- 데이터의 ID는 보통 고유하므로 key로 적합

#### 인덱스를 key로 사용하는 방법:

```javascript
const numbers = [1, 2, 3, 4, 5];
const updatedNums = numbers.map((number, index) => (
  <li key={index}>{number}</li>
));
```

- 하지만 배열 항목 순서가 바뀔 수 있는 경우 인덱스를 key로 사용하는 것은 권장X

##### Key 사용 시 주의사항

- map() 함수 안에 있는 엘리먼트는 반드시 key가 필요

## 11강.Form

### Form과 Controlled Component

#### Form

- 양식

  - 예: 텍스트 입력, 체크박스 등

- 사용자로부터 입력을 받기 위해 사용

- HTML Form은 자체적으로 state 관리

#### Controlled Components

- 사용자가 입력한 값에 접근하고 제어할 수 있게 해주는 컴포넌트

- 누군가의 통제를 받는 컴포넌트

  - 여기서 통제를 하는 주체는 리액트

- 리액트의 통제를 받는 값: input form element

- HTML 폼에서는 각 엘리먼트가 자체적으로 state를 관리-> 자바스크립트를 통해 각각의 값에 접근하기 어려움/ Controlled Component에서는 모든 데이터를 state에서 관리함.

- state 값을 변경할 때, 무조건 setState() 함수를 사용(함수 컴포넌트의 경우 useState() 훅 사용)

- 리액트에서 모든 값 통제 가능 구조 가짐. 즉, 사용자의 입력을 직접적으로 제어 가능.

### 다양한 Forms

1. Textarea 태그: 여러 줄에 걸쳐 긴 텍스트를 입력받기 위한 HTML 태그

```xml
<textarea>
  ~~~~
</textarea>
```

2. Select 태그: Drop-down 목록을 보여줌
   - 드롭 다운 목록은 여러가지 옵션 중 하나를 선택할 수 있는 기능 제공
3. File input 태그: 디바이스의 저장 장치로부터 하나 또는 여러 개의 파일을 선택 가능

- <input type="file" /> 형태로 사용
- 값이 읽기 전용. 리액트에서는 uncontrolled component가 됨(리액트의 통제를 받지 않음)

4. Multiple Inputs: 하나의 컴포넌트에서 여러 개의 입력을 다루기 위해서, 여러 개의 state를 선언하여 각각의 입력에 대해 사용.

**null 넣어주면 자유도 증가**

## 12강.Lifting State Up

### Shared State (공유 상태)

- Lifting State Up: 여러 컴포넌트에서 동일한 데이터를 공유해야 할 때 사용하는 React 패턴

- 여러 컴포넌트가 동일한 state를 공유해야 할 경우, 해당 state를 공통 부모 컴포넌트로 끌어올림.

### 하위 컴포넌트에서 State 공유하기

1. 부모 컴포넌트에서 state를 선언하고 관리.
2. 자식 컴포넌트에 props로 state 값과 state를 변경할 수 있는 함수를 전달.
3. 자식 컴포넌트는 전달받은 props를 통해 state를 읽고, 함수를 호출하여 state 변경 가능.

## 13강. Composition vs Inheritance

### Composition 방법과 Inheritance

1. Composition(합합성)

- 정의: 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것

- 특징: 리액트 전반에 걸쳐 굉장히 많이 사용되는 방법

- 여러 개의 컴포넌트들을 어떻게 조합할 것인가에 대한 고민이 필요

  ##### Composition의 주요 방법

  1. Containment(포함)

  - 정의: 하위 컴포넌트를 포함하는 형태의 합성 방법

  사용 사례: Sidebar, Dialog 같은 Box 형태의 컴포넌트는 자신의 하위 컴포넌트를 미리 알 수 없음

  구현 방법: children이란 prop을 사용해서 조합

  2. Specialization(특수화)

  - 정의: 범용적인 개념을 구별이 되게 구체화하는 것

  - 기존 방식: 객체 지향 언어에서는 상속을 사용하여 구현

  - 리액트 방식: React에서는 Composition을 사용하여 구현

  3. Containment와 Specialization 함께 사용하기
     두 가지 방법을 조합하여 더 복잡한 컴포넌트 구현 가능

2. Inheritance(상속)

- 정의: 부모 클래스를 상속받아서 새로운 자식 클래스를 만드는 것

- 특징: 자식 클래스는 부모 클래스가 가진 변수나 함수 등의 속성을 모두 갖게 됨

- 리액트에서의 상속: 다른 컴포넌트로부터 상속받아 새로운 컴포넌트를 만드는 것

- 메타 견해: 수천 개의 리액트 컴포넌트를 사용했지만 상속을 사용하여 컴포넌트를 만드는 것 추천할 만한 사례 찾지 못함

- 권장 사항: 리액트에서는 상속 대신 합성을 사용하여 컴포넌트 간 코드를 재사용하는 것을 권장

- 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 만들고, 만든 컴포넌트들을 조합해서 새로운 컴포넌트를 만드는 것이 좋음

## 14강. Context

### Context란?

- 기존 리액트 애플리케이션: 데이터가 컴포넌트의 props를 통해 부모에서 자식으로 단방향으로 전달
  - 여러 컴포넌트에 걸쳐 자주 사용되는 데이터의 경우 복잡, 불편.
- Context 사용: 컴포넌트 트리를 통해 곧바로 데이터를 전달 가능, 중간에 위치한 컴포넌트들이 데이터를 하위 컴포넌트로 전달할 필요 없음, 어떤 컴포넌트든지 필요한 데이터에 쉽게 접근 가능.

- 언제 사용? 여러 개의 컴포넌트들이 접근해야 하는 데이터.

  - 예: 로그인 여부, 로그인 정보, UI 테마, 현재 언어 등

- 사용하기 전에 고려할 점
  : 컴포넌트와 context가 연동되면 재사용성 감소 가능성 존재
  - 다른 레벨의 많은 컴포넌트가 데이터를 필요로 하는 경우가 아니라면, 기존의 props를 통한 데이터 전달 방식 사용 권장.

### Context API

#### Context 생성하기

##### React.createContext 사용

- context 객체 생성

```jsx
const MyContext = React.createContext(기본값);
```

> 이때 createContext 함수의 파라미터로 기본값을 설정 가능. 이 기본값은 Provider가 없을 때만 사용.

##### Context.Provider: Context를 생성한 후에는 하위 컴포넌트들이 해당 Context의 데이터를 받을 수 있도록 Provider를 사용.

```jsx
<MyContext.Provider value={전달할 값}>
{하위 컴포넌트}
</MyContext.Provider>
```

- Provider로 하위 태그들을 감싸주면 모든 하위 컴포넌트들이 해당 context의 데이터에 접근 가능해짐.
- value prop을 통해 데이터를 전달

- 하위 컴포넌트들은 이 값을 소비하는 "consuming component"가 됨

- 주의사항: Provider 컴포넌트가 재렌더링될 때마다 모든 하위 consumer 컴포넌트가 재렌더링될 수 있음. 불필요한 재렌더링을 방지하기 위해 value에 값을 직접 넣는 것이 아닌 state를 사용하는 것이 좋음

##### Context 데이터 사용하기

- Class.contextType

  - Class 컴포넌트에서 Context 데이터에 접근하기 위한 방법
  - this.context를 통해 상위에 있는 Provider 중에서 가장 가까운 값을 가져올 수 있음

- Context.Consumer (함수형)

  - Function as a child 패턴을 사용

  - Consumer로 감싸주면 자식으로 들어간 함수가 현재 Context value를 받아 React node로 반환

  - 함수로 전달되는 value는 Provider의 value prop과 동일

  - 상위 컴포넌트의 Provider가 없다면 이 value 파라미터는 createContext로 호출하는 기본값과 동일

    - Context.displayName:개발자 도구에서 Context를 식별하기 쉽게 해주는 속성
    - 여러 Context 사용하기:여러 Context.Provider를 중첩하여 사용할 수 있음

- useContext Hook

  - 함수형 컴포넌트에서 Context를 더 쉽게 사용할 수 있는 Hook

  - React.createContext 함수 호출로 생성된 context 객체를 인자로 받아 현재 context 값을 반환

  - Context 값이 변경되면 변경된 값과 함께 useContext Hook을 사용하는 컴포넌트가 재렌더링됨
