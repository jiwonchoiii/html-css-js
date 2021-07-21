function printMsg(msg){                      // 기본함수 선언
    console.log('기본함수:',msg);
} // printMsg

printMsg("호출되었습니다. ");  // 기본함수가 호출 

// 변수에 함수표현식으로 익명함수 대입
// var printMsg = function ttt(msg)  
var printMsg = function (msg){               // 익명함수 선언
    console.log('익명함수:',msg);
} // printMsg


// 과연 둘중에 누가 호출될까? - 익명함수가 우선****
// 함수 선언 전에 호출하면 기본함수가 우선(이렇게 코딩하진 않지만..)
printMsg("호출되었습니다. "); // 익명함수가 호출 


// 이름이 있는 기본함수 일지라도, 한번 함수표현식으로 변수에 대입되면
// 원래의 함수명은 사용 불가  ---> 변수명으로만 호출가능******
// ttt("TTT"); // not defined

console.log('- printMsg:', printMsg)