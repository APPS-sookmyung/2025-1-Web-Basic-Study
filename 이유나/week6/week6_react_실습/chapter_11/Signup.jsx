import React, { useState } from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자"); // 성별 기본값 설정함

  // 이름 입력값 처리
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  // 성별 선택값 처리
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  // 제출 시 alert로 이름과 성별 보여줌
  const handleSubmit = (event) => {
    alert(`이름: ${name}, 성별: ${gender}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        성별:
        <select value={gender} onChange={handleChangeGender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;
