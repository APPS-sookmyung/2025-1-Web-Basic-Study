## 15강. styling.

### css와 selector

- selector의 유형
  1. element selector를 사용
  2. ID selector
  3. class selector
  4. universal selector
  5. grouping selector
- 상태와 관련된 대표적인 selector

  1. :hover

     마우스 커서가 element 위에 올라왔을 때

  2. :active

     주로 a태그에 사용되는데, element가 클릭됐을 때를 의미

  3. :focus

     주로 input태그에서 사용되는데, element가 초점을 갖고 있을 경우를 의미

  4. :checked

     radio button이나 checkbox 같은 유형의 input 태그가 체크되어 있는 경우를 의미

  5. :first-child, :last-child

     상위 element를 기준으로 각각 첫 번째 child, 마지막 child일 경우를 의미

- 레이아웃과 관련된 속성

  화면에 element들을 어떻게 배치할 것인가?

  display: none

  - element를 화면에서 숨기기 위해 사용
  - `<script>` 태그의 display 속성 기본값은 display: none

  display: block

  - 블록 단위로 element를 배치
  - `<p>`, `<div>`, `<h1>` ~ `<h6>` 태그의 display 속성 기본값이 display: block

  display: inline

  - element를 라인 안에 넣는 것
  - `<span>` 태그의 display 속성 기본값이 display: inline

  display: flex

  - element를 블록 레벨의 flex container로 표시
  - container이기 때문에 내부에 다른 element를 포함
  - visibility 속성

  ```html
  div { visibility: visible | hidden; }
  ```

  대표적인 값들

  1. visibility: visible;
  2. visibility: hidden;

- position 속성의 대표적인 값들

  static

  - 기본값으로 element를 원래의 순서대로 위치시킴

  fixed

  - element를 브라우저 window에 상대적으로 위치시킴

  relative

  - element를 보통의 위치에 상대적으로 위치시킴

  absolute

  - element를 절대 위치에 위치시킴

- 가로, 세로 길이와 관련된 속성

```html
div { width: auto | value; height: auto | value; min-width: auto | value;
min-height: auto | value; max-width: auto | value; max-height: auto | value; }
```

- flex container

  flex item으로 이루어짐

- flex와 관련된 대표적인 속성

  ```html
  div { display: flex; flex-direction: row | column | row-reverse |
  column-reverse; align-items: stretch | flex-start | center | flex-end |
  baseline; justify-content: flex-start | center | flex-end | space-between |
  space-around; }
  ```

- flex-direction속성의 대표적인 값들

  row

  - 기본값이며 아이템을 행(row)을 따라 가로 순서대로 왼쪽부터 배치

  column

  - 아이템을 열(column)을 따라 세로 순서대로 위쪽부터 배치

  row-reverse

  - 아이템을 행(row)의 역(reverse) 방향으로 오른쪽부터 배치

  column-reverse

  - 아이템을 열(column)의 역(reverse) 방향으로 아래쪽부터 배치

- align-items 속성의 대표적인 값들

  stretch

  - 기본값으로써 아이템을 늘려서(stretch) 컨테이너를 가득 채움

  flex-start

  - cross axis의 시작 지점으로 아이템을 정렬

  center

  - cross axis의 중앙으로 아이템을 정렬

  flex-end

  - cross axis의 끝 지점으로 아이템을 정렬

  baseline

  - 아이템을 baseline 기준으로 정렬

- justify-content 속성의 대표적인 값들

  flex-start

  - main axis의 시작 지점으로 아이템을 맞춤

  center

  - main axis의 중앙으로 아이템을 맞춤

  flex-end

  - main axis의 끝 지점으로 아이템을 맞춤

  space-between

  - main axis를 기준으로 첫 아이템은 시작 지점, 마지막 아이템은 끝 지점에 맞추고

    중간 아이템들은 일정한 간격을 두고 배치

  space-around

  - main axis를 기준으로 각 아이템의 주위에 동일한 간격을 두고 배치

### font와 관련된 속성

- font-family

  ```css
  #title1 {
    font-family: "Times New Roman", Times, serif;
  }

  #title2 {
    font-family: Arial, Verdana, sans-serif;
  }

  #title3 {
    font-family: "Courier New", Monaco, monospace;
  }
  ```

- 일반적인 글꼴 분류 (Generic font family)

  - serif

    각 글자의 모서리에 작은 테두리를 갖고 있는 형태의 글꼴.

  - sans-serif

    모서리에 테두리가 없이 깔끔한 선을 가진 글꼴.

    컴퓨터 모니터에서는 Serif보다 가독성이 좋음.

  - monospace

    모든 글자가 같은 가로 길이를 가지는 글꼴.

    코딩을 할 때 주로 사용.

  - cursive

    사람이 쓴 손글씨 모양의 글꼴.

  - fantasy

    장식이 들어간 형태의 글꼴.

- font-size

```css
#title1 {
  font-size: 16px;
}

#title2 {
  font-size: 1em;
}

#title3 {
  font-size: 10vw; /* viewport 가로 길이의 10%를 의미 */
}
```

- font-weight

```css
#title1 {
  font-weight: bold;
}

#title2 {
  font-weight: 500;
}
```

- font-style

  normal

  - 일반적인 글자의 형태를 의미.

  italic

  - 글자가 기울어진 형태로 나타남.
  - 별도로 기울어진 형태의 글자들을 직접 디자인해서 만든 것.

  oblique

  - 글자가 비스듬한 형태로 나타남.
  - 그냥 글자를 기울인 것.

- 기타 많이 사용하는 속성들

  CSS의 색상 값

  - 16진수 컬러 값: #ff0000
  - 투명도를 가진 16진수 컬러 값: #ff000055
  - RGB 컬러 값: rgb(255, 0, 0)
  - RGBA 컬러 값: rgba(255, 0, 0, 0.5)
  - HSL 컬러 값: hsl(120, 100%, 25%)
  - HSLA 컬러 값: hsla(120, 100%, 50%, 0.3)
  - 미리 정의된 색상의 이름: red
  - currentcolor 키워드: 현재 지정된 색상 값을 사용

```css
#section1 {
  background-color: red;
}

#section2 {
  border: 1px solid black;
}
```

### styled-components

```jsx
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background: grey;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: white;
  text-align: center;
`;

function MainPage(props) {
  return (
    <Wrapper>
      <Title>안녕, 리액트!</Title>
    </Wrapper>
  );
}

export default MainPage;
```

- tagged template literal

let number = 20 → literal

- 다양한 종류의 literal

```jsx
// 정수 리터럴 (Integer literal)
const myNumber = 10;

// 문자열 리터럴 (String literal)
const myStr = "Hello";

// 배열 리터럴 (Array literal)
const myArray = [];

// 객체 리터럴 (Object literal)
const myObject = {};
```

- template literal

```jsx
// Untagged template literal

// 단순한 문자열
`string text` // 여러 줄(Multi-line)에 걸친 문자열
`string text line 1
 string text line 2` // 대체 가능한 expression이 들어있는 문자열
`string text ${expression} string text`;

// Tagged template literal
// myFunction의 파라미터로 expression으로 구분된 문자열 배열과 expression이 순서대로 들어간 형태로 호출됨
myFunction`string text ${expression} string text`;
```

- styled-components 사용 예시

```jsx
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background: grey;
`;
```

- styled-components의 props 사용하기

```jsx
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => (props.dark ? "white" : "dark")};
  background: ${(props) => (props.dark ? "black" : "white")};
  border: 1px solid black;
`;

function Sample(props) {
  return (
    <div>
      <Button>Normal</Button>
      <Button dark>Dark</Button>
    </div>
  );
}

export default Sample;
```

- style-components의 스타일 확장하기

```jsx
import React from "react";
import styled from "styled-components";

// Button 컴포넌트
const Button = styled.button`
  color: grey;
  border: 2px solid palevioletred;
`;

// Button에 style이 추가된 RoundedButton 컴포넌트
const RoundedButton = styled(Button)`
  border-radius: 16px;
`;

function Sample(props) {
  return (
    <div>
      <Button>Normal</Button>
      <RoundedButton>Rounded</RoundedButton>
    </div>
  );
}

export default Sample;
```

## 17강. Appendix A 리액트 버전18 소개

- Automatic Batching

  여러 가지 작업을 한 번에 처리하는 것

(기존 방식) State 1 Update → Re-render → State 2 Update → Re-render

(Automatic Batching 적용) State 1 Update와 State 2 Update 묶어서 한 번에 처리! → Re-render

```jsx
// 기존 버전
setTimeout(() => {
  setCount((count) => count + 1);
  setIsFull((isFull) => !isFull);
  // 각 state의 업데이트마다 재렌더링이 발생
}, 1000);

// 현재 버전
setTimeout(() => {
  setCount((count) => count + 1);
  setIsFull((isFull) => !isFull);
  // 재렌더링이 마지막에 한 번만 발생 (Automatic Batching)
}, 1000);
```

### transitions

긴급한 업데이트와 긴급하지 않은 업데이트를 구분해서 처리하기 위한 개념

- 긴급한 업데이트

  사용자와 직접적인 인터랙션이 일어나는 경우

  ex. 글자 입력, 버튼 클릭 등

- 긴급하지 않은 업데이트

  사용자와 직접적인 인터랙션이 일어나지 않는 경우

  ex. 서버로부터 결과를 받아와서 보여주는 경우

```jsx
import { startTransition } from "react";

// 긴급 업데이트: 입력한 글자를 화면에 보여줘야 함
setInputValue(input);

// 함수 내에 있는 모든 업데이트는 Transition 업데이트가 됨
startTransition(() => {
  // Transition 업데이트: 검색 결과를 보여줘야 함
  setSearchQuery(input);
});
```

### suspense

하위 컴포넌트가 준비되기 전까지 렌더링을 중단하는 것

웹사이트 규모 커짐, 컴포넌트 사이즈 커짐

Code Splitting

```jsx
import { lazy, Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";

const OtherComponent = lazy(() => import("./OtherComponent"));

function MyComponent(props) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <OtherComponent />
    </Suspense>
  );
}

export default MyComponent;
```

### 클라이언트와 서버 렌더링 API 업데이트

리액트 DOM 클라이언트

- 새로운 방식

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- 리액트 DOM 서버

  renderToPipeableStream

  NodeJS 환경에서 스트리밍을 위한 함수

  renderToReadableStream

  Edge runtime 환경을 위한 함수

### 새로운 Strict 모드 작동 방식

언마운트 시켰다가 다시 한 번 마운트 시킴

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 새롭게 추가된 훅들

- useID()
- useTransitions()
- useDeferredValue()
- useSyncExternalStore()
- useInsertionEffect()
