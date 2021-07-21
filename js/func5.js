function add(x, y) {

    //  ES6: Template String(`)을 이용한 로그 출력 
    //  ${변수명} : 지정변수의 값을 주입(injection)
    console.log(`add(${x},${y}) invoked`);

    return x + y;
} // for

// **주의: 한번 함수를 변수에 대입하면, 함수의 원래이름으로는 함수 호출 불가!
var temp = function ttt() {

} // ttt로 호출 불가

var calSum = add;  // 함수를 변수에 할당 
var addUp = add; // 함수를 변수에 할당 

console.log("\t+ 결과 값:", calSum(5, 10));
console.log("\t+ 결과 값:", addUp(3, 20));

console.log("\t+ 결과 값:", add(10, 20));  // 독립적인 선언된 함수가 변수에 대입된 경우는 함수의 원래 이름으로 호출 가능하다. 

