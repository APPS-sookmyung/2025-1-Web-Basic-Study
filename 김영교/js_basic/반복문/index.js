//FOR문

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
for (; i < 5; ) {
  console.log(i++);
}

for (let i = 0; i < 10; i++) {
  if (i === 7) {
    break;
    //continue로 하면7만건너뛰고 뒤에까지 출력
  }
  console.log(i);
}

//while문
const arr = [1, 2, 3];

for (const i of arr) {
  console.log(i);
}
//배열 요소들을 처음부터 끝까지 순회하며 출력하는는

let o = 0;
while (o < 10) {
  console.log(o++);
}

do {
  console.log(o++);
} while (i < 10);
