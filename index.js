//글씨 한 글자씩 나타내기

"use strict";
const content = "반가워요! 제 이름은 PEPPER. \n 모든 문제를 현명하게 풀어나가는 \n 개발자를 꿈꿉니다.";

const text = document.querySelector(".korean-coment")
//타이핑 효과를 한 글자씩 접근하기위해 변수를 0으로 선언
let i = 0;

function typing() {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br>" : txt;
    if (i > content.length) {
        text.textContent = ""
        i = 0;
    }
}
//타이핑을 주기적으로 동작하도록 설정
setInterval(typing, 200)
