// 가위 바위 보 게임
const buttons = document.querySelectorAll("button");
const computerChoice = document.querySelector(".computer-choice");
const userChoice = document.querySelector(".you-choice");
const winner = document.querySelector(".result");

const result = ["가위", "바위", "보"]; // 컴퓨터가 랜덤하게 뽑아내게 할거임

const show = (user, computer, result) => {
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = result;
};
const game = (user, computer) => {
  let message;

  if (user === computer) {
    message = "무승부";
  } else {
    switch (user + computer) {
      //가위보, 바위가위, 보바위: user win
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자 승리";
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        message = "컴퓨터 승리";
        break;
    }
  }

  show(user, computer, message);
};
const play = (event) => {
  const user = event.target.innerText;
  // floor 메소드는 주어진 숫자와 같거나 작은 정수중에서 가장 큰 수를 반환
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer); //이너 텍스트 값이 콘솔창에 출력됨
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});
