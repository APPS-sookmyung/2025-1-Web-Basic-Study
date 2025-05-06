//if문
const a = 10;
const b = 20;
const c = 20;
if (a > b) {
  console.log("a가 더 큼큼");
} else if (b === c) {
  console.log("b와 c가 같다");
} else {
  console.log("여기는 언제 출력?");
}

//if와 else는 한번씩만 사용가능, else는 가장 마지막에만 위치 가능

//switch

const number = 10;
switch (number) {
  case 10:
    console.log(number);
    break;
  //break와 항상 쌍으로 사용
  case 2:
    console.log(number);
    break;
  default:
    console.log("아무것도 해당되지 않음");
}
