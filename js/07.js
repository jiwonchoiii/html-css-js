var x=5;
var y=7;
var result;

result=(x>y)? x : y; // 삼항 연산자 
console.log("큰 값:",  result);

result=(x>y)? x-y : y-x; // 삼항 연산자 
console.log("큰 값 - 작은 값:",  result);

result= (x!=y)? 'true' : console.log('false') ;
console.log(result);  // undefined
