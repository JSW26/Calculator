let result = 0;
let input = document.getElementById("input");

function add(char) {
    input.value = input.value + char;
}
function reset() {
    input.value = null;
    document.getElementById("result").innerText = null;
}
function backspace() {
    input.value = input.value.slice(0,-1);      //string 마지막 문자 제거
}
function cal() {
        try {
            let cal = (new Function('return '+input.value))();      //eval(input.value) 대체됨
            console.log(cal);       
            if (cal == undefined) {
                document.getElementById("result").innerText = null;
            } else {
                document.getElementById("result").innerText = cal;
            } 
        } catch(e) {      
            document.getElementById("result").innerText = "올바른 수식이 아닙니다.";       //오류가 발생했을때 실행
        }
    
}