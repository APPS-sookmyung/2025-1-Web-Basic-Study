# 7주차 강의 내용 정리

## 15강 : Styling
### CSS
- Cascading Style Sheets
- Selector (선택자) `h1 {color: green; font-size: 16px}`
- html 태그 또는 클래스 이름 등으로 선택 가능

### Selector의 유형
- Element selector `h1`
- ID selector `#section`
- Class selector `.medium p.medium (p태그 중 클래스가 medium인)`
- Universal selector 전체 element에 적용 `*`
- Grouping selector `h1, h2, p`
- 상태 관련 selector `:hover :active :focus :checked :first-child`

### 레이아웃과 관련된 속성
- display : none, block, inline, flex 등 ...
- visibility : visible, hidden (화면에서 안 보이지만 영역은 그대로 차지)
- position : static, fixed, relative, absolute

### 가로, 세로 
- width, height, min-width, min-height, max-width, max-height ...

### Flexbox
- CSS 불편함 개선을 위해 등장
- flex container와 flex item으로 구성
- `display: flex` 속성 지정해야 사용할 수 있음
- flex-direction: 아이템 배치 순서 결정
- align-items: 아이템 정렬 방식 (cross axis)
- justify-content: 아이템 정렬 방식 (main axis)

### font 관련 속성
- font-family, font-size, font-weight, font-style

### Styled-components
- 전세계적으로 리액트에 많이 사용되는 오픈소스 라이브러리
- tagged template literal을 사용
- 설치하기 `npm install --save styled-components`
- template literal : 템플릿을 literal처럼 사용. `` 사용
    - untagged 
    - tagged ```const output = myTagFunction`제 이름은 ${name}입니다.` ```
- styled-components 사용 예시
```javascript
import React from "react";
import styled from "styled-components";

const Wrapper = style.div`
    padding: lem;
    background: grey;
`;
```

### styled-components의 props 사용하기
```javascript
const Button = styled.button`
    color: ${props => props.dark ? "white" : "black};
    background: ${props => props.dark ? "black" : "white"};
    border: 1px solid black;
`;

function Sample(props) {
    return (
        <div>
            <Button>Normal</Button>
            <Button dark>Dark</Button>
        </div>
    )}
```
- props를 사용하여 해당 컴포넌트의 css 속성 지정

### styled-components의 스타일 확장하기
- 클래스 상속하는 느낌
```javascript
const RoundedButton = styled(Button)`
    border-radius: 16px;
`;
```
## 16강 : 미니 프로젝트
### 미니 블로그에 필요한 기능과 컴포넌트
- 글 목록 보기
    - PostList, PostListItem
- 글 보기
    - Post
- 댓글 보기
    - CommentList, CommentListItem
- 글 작성  
    - PostWrite
- 댓글 작성
    - CommentWrite

### 개발 방법
- Bottom Up 방식 : 작은 컴포넌트부터 구현하여 큰 컴포넌트를 만들기
- 백엔드 없으므로 가짜 데이터 생성 (data.json)
- react-router-dom : url과 컴포넌트를 연결하여 url로 특정 컴포넌트를 렌더링 가능하도록 하는 라이브러리

### react-router-dom
```javascript
<BrowserRouter>
    <Routes>
        <Route index element={<MainPage />} />
        <Route path="places" element={<PlacePage />} />
        <Route path="games" element={<GamePage />} />
    </Routes>
</BrowserRouter>
```
- path: 경로, element: 경로에 따라 렌더링할 컴포넌트
- path 없으면 index 렌더링

### useNavigate()
- react-router-dom 에서 제공하는 hook
- `navigate("/")`

### 빌드 및 배포
- serve 패키지 설치 `npm install -g serve`
- 빌드하기 `serve -s build`

## 17강 : 리액트 버전 18 소개
- Automatic Batching : 여러 업데이트 작업을 한번에 묶어서 처리 (재렌더링)
- Transitions : 긴급한 업데이트, 긴급하지 않은 업데이트 구분하기 위한 개념
    - `import { startTransition } from 'react';`
    - 긴급 : 사용자와 직접적인 인터랙션 일어나는 경우
    - 긴급 X : 사용자와 직접적인 인터랙션 일어나지 않는 경우
    - 긴급한 업데이트 먼저 처리
- Suspense : 하위 컴포넌트가 준비되기 전까지 렌더링을 중단함
- Strict Mode : 애플리케이션의 잠재적인 문제 알아내기 위한 도구. 언마운트 시켰다가 다시 마운트시킴
- 새롭게 추가된 훅들
    - useId, useTransitions, useDefferedValue, useSyncExternalStore ...