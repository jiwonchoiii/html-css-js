var x=5;
var y=7;
var result; // undefined: 변수가 선언만 되고, 초기화되지 않은 상태 

// 그 후에, 실행문장을 만든다.
result = (x<10 && y>10); //논리곱(그리고)
console.log("x<10 && y>10 : " , result);

result = (x<10 || y>10); //논리합(또는)
console.log("x<10 || y>10 : ", result);

result = !(x<10 && y>10); //논리 부정(NOT)
console.log("!(x<10 && y>10) : " , result);

console.log(typeof result);