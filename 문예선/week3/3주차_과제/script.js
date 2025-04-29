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
  loading.classList.remove("hidden");
}

function hideLoading() {
  loading.classList.add("hidden");
}

function showError(message) {
  error.textContent = message;
  error.classList.remove("hidden");
  setTimeout(() => error.classList.add("hidden"), 3000);
}

function displayFacts(facts) {
  factContainer.innerHTML = "";
  const factsArray = Array.isArray(facts) ? facts : [facts];
  factsArray.forEach((fact, index) => {
    const factCard = document.createElement("div");
    factCard.className = "fact-card";
    if (factsArray.length > 1) {
      factCard.textContent = `${index + 1}. ${fact}`;
    } else {
      factCard.textContent = fact;
    }
    factContainer.appendChild(factCard);
  });
}

// #1: API 호출 함수 구현 (비동기 처리 + fetch 사용)
async function fetchFacts(count = 1) {
  //  1. 사용자가 선택한 언어(language) 가져오기
  const selectedLanguage = languageSelect.value; // "eng" 또는 "kor"
  //  2. API 요청 URL 생성!!!! 힌트: const url='$_?_= $_&_=$_'
  const url = `${API_URL}/?count=${count}&lang=${selectedLanguage}`;

  try {
    //  3. 로딩 상태 표시
    showLoading();
    // ✅ 4. API 요청을 보내고 응답을 기다림
    // → fetch()를 사용하여 네트워크 요청을 보낸다.
    const response = await fetch(url);

    /* HTTP 상태 코드를 체크하여 응답이 정상인지 확인. →  성공하면  응답을 JSON 형식으로 변환하여 데이터 반환. 
    if 응답 없을 시 에러 발생 메세지 작성 "Failed to fetch cat facts" */
    if (!response.ok) {
      throw new Error("Failed to fetch cat facts");
    }
    // 5. JSON 데이터 변환
    const data = await response.json();

    //  6. 데이터 return(반환환) (data.data 배열)
    if (!data || !data.data || !Array.isArray(data.data)) {
      throw new Error("No facts returned from API");
    }
    return data.data;
  } catch (err) {
    // 7. 에러 발생 시 사용자에게 알림
    showError(err.message || "Unknown error");
    return null;
  } finally {
    // 8. 요청이 끝나면 로딩 상태 숨기기
    hideLoading();
  }
}

// #2: 이벤트 리스너 추가 (버튼 클릭 시 API 요청 및 결과 표시)
getFactBtn.addEventListener("click", async () => {
  // 1. API에서 하나의 랜덤한 고양이 사실 가져오기
  const facts = await fetchFacts(1);
  // 2. 응답 데이터가 있을 경우, 화면에 표시 (단일 팩트는 한 줄)
  if (facts && facts.length > 0) {
    displayFacts(facts[0]);
  }
});

// #3: 여러 개의 팩트를 가져오는 버튼 처리
getMultipleBtn.addEventListener("click", async () => {
  // 1. 입력된 개수 가져오기 (기본값 1)
  const count = parseInt(factCount.value, 10);

  // 2. 유효한 개수(1~5)인지 확인
  if (isNaN(count) || count < 1 || count > 5) {
    showError("Please enter a number between 1 and 5");
    return;
  }

  // 3. API 호출하여 여러 개의 팩트 가져오기
  const facts = await fetchFacts(count);

  // 4. 응답 데이터가 있을 경우, 화면에 표시
  if (facts && facts.length > 0) {
    displayFacts(facts);
  }
});

// 페이지 로드시 자동으로 하나의 고양이 사실 가져오기
window.addEventListener("load", () => {
  getFactBtn.click();
});
