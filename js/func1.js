var text1 = "함수 선언 전 호출"; // string타입으로 추론
var text2 = "함수 선언 후 호출"; // string타입으로 추론

// 함수호출연산자()를 이용한 함수호출#1
printMsg(text1); // 함수 선언 전 호출

// 1급 객체:
// (1) 자바스크립트 엔진이, JS코드를 실행할 때 가장 먼저 함수선언부를 찾아서 메모리에 함수를 만들어 놓음
// (2) 함수는 변수의 값으로 대입이 가능하다.  - 변수로 함수를 호출할 수 있다.
function printMsg(msg) { // 함수 선언
    console.debug("printMsg(msg) invoked.");
    console.log('함수 호출 메시지:',msg);
} // printMsg

// 함수호출연산자()를 이용한 함수호출#2
printMsg(text2); // 함수 선언 후 호출

// 1급 객체로서의 함수의 성질을 테스트해보자!!
var func = printMsg;

// func("최지원");

function ttt(myFunc) {
    console.debug("ttt(myFunc) invoked.");
    myFunc("TTT");
} // ttt

ttt(printMsg); //함수를 매개변수로 전달할 수 있다.