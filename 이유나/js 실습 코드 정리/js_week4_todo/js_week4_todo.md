# todo 기록하기

## 주요 기능

-기존의 투두 앱에서 업그레이드 -저장 기능 추가 -삭제 버튼 추가

## 예시 코드

```javascript
const save = () => {
  localStorage.selItem("todos", JSON.stringify(todos));
};

const delItem = (event) => {
  const target = event.target.parentElement;

  todos = todos.filter((todo) => todo.id !== parseInt(target.id));
  save();

  target.remove();
};
```
