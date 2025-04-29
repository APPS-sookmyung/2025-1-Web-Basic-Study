// DOM 요소 선택
const languageSelect = document.getElementById("language");
const getFactBtn = document.getElementById("getFactBtn");
const getMultipleBtn = document.getElementById("getMultipleBtn");
const factCount = document.getElementById("factCount");
const factContainer = document.getElementById("factContainer");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

// API URL
const API_URL = "https://meowfacts.herokuapp.com";

// 유틸리티 함수들
function showLoading() {
  loading.classList.remove("hidden"); // 로딩 메시지 표시
}

function hideLoading() {
  loading.classList.add("hidden"); // 로딩 메시지 숨김
}

function showError(message) {
  error.textContent = message; // 에러 메시지 설정
  error.classList.remove("hidden"); // 에러 메시지 표시
  setTimeout(() => error.classList.add("hidden"), 3000); // 3초 후 자동으로 숨김
}

function displayFacts(facts) {
  factContainer.innerHTML = ""; // 기존 내용을 비우기

  // 전달된 데이터가 단일 문자열일 수도 있으므로 배열로 변환
  const factsArray = Array.isArray(facts) ? facts : [facts];

  factsArray.forEach((fact, index) => {
    const factCard = document.createElement("div");
    factCard.className = "fact-card";

    // 만약 여러 개의 팩트가 있다면 번호를 붙여서 표시
    if (factsArray.length > 1) {
      factCard.textContent = `${index + 1}. ${fact}`;
    } else {
      factCard.textContent = fact;
    }

    factContainer.appendChild(factCard); // 생성한 요소를 factContainer에 추가
  });
}

// #1: API 호출 함수 구현 (비동기 처리 + fetch 사용)
// - 현재 선택된 언어 값을 가져온다.
// - API URL을 동적으로 생성한다. (`count`와 `lang`을 쿼리 파라미터로 추가)
// - 네트워크 요청을 보낸다 (`fetch` 사용)
// - 요청이 성공하면 JSON 데이터를 반환한다.
// - 요청이 실패하면 에러 메시지를 출력한다.
// - 로딩 표시 (`showLoading`)와 숨기기 (`hideLoading`)를 적절히 적용한다.
async function fetchFacts(count = 1) {
    const selectedLanguage = languageSelect.value;
    const url = `${API_URL}/?count=${count}&lang=${selectedLanguage}`;

  try {
    //  3. 로딩 상태 표시
    showLoading();
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch cat facts");
    }

    const data = await response.json();

    return data.data;
  } catch (err) {
    showError(err.message || "Something went wrong!");
  } finally {
    hideLoading();
  }
}

/* #2: 이벤트 리스너 추가 (버튼 클릭 시 API 요청 및 결과 표시)
- 버튼 클릭 시 `fetchFacts()` 호출하여 데이터 가져오기
- 단일 fact는 `displayFacts(facts[0])`을 사용해 표시*/
getFactBtn.addEventListener("click", async () => {
    const facts = await fetchFacts(1);
    if (facts) {
        displayFacts(facts[0]);
    }
});

//   #3: 여러 개의 팩트를 가져오는 버튼 처리
// - 사용자 입력값(`factCount.value`)을 정수로 변환한다.
// - 유효한 값(1~5)인지 확인 후, 아니라면 오류 메시지를 띄운다.
// - `fetchFacts(count)`를 호출해 데이터를 가져온 후 화면에 표시한다.
getMultipleBtn.addEventListener("click", async () => {
    const count = parseInt(factCount.value) || 1;
    if (count < 1 || count > 5) {
        showError("Please enter a number between 1 and 5");
        return;
    }
    const facts = await fetchFacts(count);
    if (facts) {
        displayFacts(facts);
    }
});

// 페이지 로드시 자동으로 하나의 고양이 사실 가져오기
window.addEventListener("load", () => {
  getFactBtn.click();
});
