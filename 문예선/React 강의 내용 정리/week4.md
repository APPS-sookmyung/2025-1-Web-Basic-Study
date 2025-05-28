## 15강. Styling

### CSS와 selector

#### CSS

- 웹 페이지 스타일 지정
- HTML 요소들의 외관을 꾸미는 데 사용

#### 선택자

- Element 에 스타일이 적용되는 규칙.
- 선택자{속성:값;속성:값;}

##### 선택자 유형

1. Element Selector: 특정 HTML 태그 선택
2. ID Selector: ID 기반 선택
3. Class Selector: 여러 개의 Element 분류 위해
4. Universal Selector: 전체 Element에 적용
5. Grouping Selector: 여러가지 선택자를 그룹으로 묶어 하나의 스타일로 적용
6. Element 상태와 관련련
7. :hover - 마우스 커서가 element 위에 올라왔을 때
8. :active - 주로 < a > 태그(link)에 사용, element가 클릭됐을 때를 의미
9. :focus - 주로 < input > 태그에서 사용, element가 초점을 갖고 있을 경우를 의미
10. :checked - radio button이나 checkbox 같은 유형의 < input > 태그가 체크되어 있는 경우를 의미
11. :first-child, :last-child - 상위 element를 기준으로 각각 첫 번째 child, 마지막 child일 경우를 의미

### 레이아웃과 관련된 CSS 속성

#### 레이아웃

- 화면에 엘리먼트들을 어떻게 배치할 것인가

1. display 속성

   - 엘리먼트를 어떻게 표시할지 방법에 관한 가장 중요한 속성

```css
div {
  display: none /*엘리먼트를 화면에서 숨기기*/ | block
    /*블록 단위로 엘리먼트 배치, 엘리먼트가 세로줄에서 시작해 위치한 위드 전체 차지*/
    | inline /*엘리먼트를 라인 안에 넣기*/ | flex
    /*엘리먼트를 블록 레벨의 flex container에 표시. 내부에 다른 엘리먼트 호함함함*/;
}
```

2. visibility 속성

   - 엘리먼트를 화면에 보여주거나 감추기 위해 사용하는 속성

```css
div {
  visibility: visible | hidden;
  /*visible은 보이게. hidden의 경우 element를 안 보이게만 하는 것, 화면에서의 영역은 그대로 차지 */
}
```

3. position 속성

- 엘리먼트를 어떻게 위치시킬 것인가를 결정

```css
div {
  position: static | fixed | relative | absolute;
  /* 
    - static: 기본값으로 element를 원래의 순서대로 위치시킴
    - fixed: element를 브라우저 window에 상대적으로 위치시킴
    - relative: element를 보통의 위치에 상대적으로 위치시킴
    - absolute: element를 절대 위치에 위치시킴. 기준은 첫번째 상위 엘리먼트.
    */
}
```

4. 가로 세로 길이이 관련 속성

```css
div {
  width: auto | value; /* 가로 */
  height: auto | value; /* 세로 */
  min-width: auto | value; /* 최소 가로 */
  min-height: auto | value; /* 최소 세로 */
  max-width: auto | value; /* 최대 가로 */
  max-height: auto | value; /* 최대 세로 */
}
```

5. flexbox

- CSS 레이아웃 사용의 불편함을 개선
- container와 item으로 구성
  - 콘테이너는 내부에 여러 엘리먼트(아이템)포함 가능.
  - 콘테이너 속성은 아이템 배치 관련.

```css
div {
  display: flex; /*안 쓰면 엘리먼트 기본값으로 지정정*/
  flex-direction: row /*행따라 가로*/ | column /*열 따라 세로*/ | row-reverse |
    column-reverse;
  /*main axis와 cross axis*/
  align-items: stretch | flex-start | center | flex-end | baseline; /*cross axis가 정렬 기준*/
  justify-content: flex-start | center | flex-end | space-between | space-around; /*main axis가 기준*/
}
```

- flex-direction: 어떤 방향으로 배치를 할 것인지 지정

- align-items: container 내에서 아이템을 어떻게 정렬할 것인지 지정

- justify-content: container 내에서 아이템을 어떻게 나란히 맞출 것인지 지정

### Font와 관련된 CSS 속성, 기타 많이 사용하는 CSS 속성

1. font-family 속성

- 어떤 글꼴을 사용할 것인지를 결정하는 속성.
- 글꼴 이름에 띄어쓰기가 들어갈 경우 큰따옴표로 묶어주어야 함.

2. fallback 시스템

- 지정한 글꼴을 찾지 못했을 경우를 대비해서 사용할 글꼴을 순서대로 지정하는 시스템.
- 최대한 많은 브라우저와 운영체제에서 글자가 깨지지 않고 나올 수 있도록 하기 위함.

  ##### 일반적인 글꼴 분류

  - serif: 각 글자의 모서리에 작은 테두리를 갖고 있는 형태

  - sans-serif: serif가 없는 형태

  - monospace: 모든 글자가 같은 너비를 갖는 형태

3. font-size, font-weight 속성

- 글꼴의 크기와 관련된 속성(px,em 단위위)
- 글꼴의 두께와 관련된 속성.

```css
div {
  font-weight: normal | bold | 100-900;
  /* 숫자가 클수록 글자의 두께가 두꺼워짐 */
}
```

4. font-style 속성: 글꼴의 스타일을 지정하기 위한 속성

- normal: 일반적인 글자의 형태

- italic: 글자가 기울어진 형태 (디자이너가 별도로 기울어진 형태 글자들을 직접 디자인)

- oblique: 글자가 비스듬한 형태 (그냥 글자를 기울인 것)

- 기타 많이 사용하는 CSS 속성 -> background-color: 엘리먼트 배경색을 지정하기 위한 속성/ border: 테두리 속성

### styled-components

- CSS 문법을 그대로 사용하면서 결과물을 스타일링된 컴포넌트 형태로 만들어주는 오픈소스 라이브러리.

설치 방법

```
# npm을 사용하는 경우
npm install --save styled-components

# yarn을 사용하는 경우
yarn add styled-components
```

#### 기본 사용법

1. Tagged template literal(``)을 사용하여 CSS가 적용된 리액트 컴포넌트를 만들기.

- Tagged: 앞에 나온 태그 펑션 호출해 리턴.
- Untagged: 문자열 여러 줄 거쳐 작성, 포맷팅

```javascript
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background: grey;
`;
```

2. props 사용하기

- 조건이나 동적으로 변하는 값을 사용해서 스타일링 하기

```javascript
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
```

3. 스타일 확장하기

다른 컴포넌트의 스타일을 확장해서 사용 가능

```javascript
// Button 컴포넌트
const Button = styled.button`
  color: grey;
  border: 2px solid palevioletred;
`;

// Button에 style이 추가된 RoundedButton 컴포넌트
const RoundedButton = styled(Button)`
  border-radius: 16px;
`;
```

## 17강. Appendix A. 리액트 버전18

### Automatic Batching

#### Batching의 개념

- React가 성능 향상을 위해 여러 개의 상태 업데이트를 하나의 리렌더링으로 묶어서 처리하는 기능.
- 불필요한 렌더링을 방지 -> 애플리케이션의 성능을 크게 개선.

#### 기존 React 17의 제한사항

- React 18 이전: React 이벤트 핸들러 내부에서만 batching 작동 -> promises, setTimeout, native event handlers에선 batching 발생x.각각의 상태 변경마다 별도의 리렌더링이 발생했음.

#### React 18의 Automatic Batching

- React 18: 어디에서 상태가 변경되든 상관없이 자동으로 batching 발생.
- promises, setTimeout, native event handlers 등 모든 곳에서 batching 적용.

### Transitions

#### Transition의 개념

- 긴급하지 않은 상태 업데이트.

#### 업데이트 우선순위 구분

- 긴급한 업데이트: 사용자 입력(타이핑, 클릭 등) - 즉시 반응해야 함

- 비긴급한 업데이트: 검색 결과 목록 표시 등 - 약간의 지연이 허용됨

### Suspense

#### Suspense의 개념

- 코드를 여러 조각으로 분리(code split) -> 동적 로딩 기법 사용용
- 하위 컴포넌트가 준비되기 전까지 렌더링을 중단하는 것
- 18에서 서버 렌더링과 데이터 패칭에서도 사용 가능해짐.

#### use Hook을 통한 Promise 읽기

- 콘텐츠 표시 방식

  1. 함께 표시: 하나의 Suspense 경계 내 모든 컴포넌트가 준비되면 동시에 표시

  2. 중첩된 표시: 여러 Suspense 경계를 중첩하여 순차적 로딩 시퀀스 생성

### 클라이언트와 서버 렌더링 API 업데이트

#### 리액트 DOM 클라이언트 변경 사항

```javascript
// 기존 React 17
import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
ReactDOM(
  <React.StrictMode>
      <App />
  </React.StrictMode>
  document.getElmentById('root')
)

// React 18
import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
const root = ReactDOM.createRoot(document.getElmentById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
  );
```

#### 새로운 서버 렌더링 API

- 서버 사이드 렌더링 위한 새로운 API들 추가.

  1. renderToPipeableStream: Node 환경에서의 스트리밍용

  2. renderToReadableStream: 최신 edge runtime 환경용

### 새로운 Strict 모드 작동 방식

- React 18의 새로운 개발 전용 검사: Strict Mode에 새로운 개발 전용 검사 추가.
- 이 검사는 컴포넌트가 처음 마운트될 때마다 자동으로 언마운트 후 다시 마운트하여 이전 상태를 복원함.

### 새롭게 추가된 훅들

1. useId

- 클라이언트와 서버 간의 고유한 ID 값을 생성하는 훅.

2. useTransition

- 트랜지션을 제공하는 훅

3. useDeferredValue

- DOM에서 긴급하지 않은 부분의 리렌더링을 지연시키는 훅

4. useSyncExternalStore

- 외부 저장소소를 지원할 수 있도록 하는 훅

5. useInsertionEffect
   CSS-in-JS 라이브러리의 성능 문제를 해결하기 위한 훅.
