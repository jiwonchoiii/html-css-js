// 함수 overloading이 과연 가능할까?    ----> 함수 오버로딩은 없다.
// 동일한 이름의 함수가 또 만들어지면 그 함수로 Overwrite
// 마지막에 선언된 동일한 이름의 함수가 살아남는다.

// function add(){
//     console.log('1. add() invoked.');

//     var sum=1; // 지역변수

//     return sum;
// } // add

// function add(x){
//     console.log(`2.add(${x}) invoked.`);

//     var sum=x+1;

//     return sum;
// } // add

// function add(x,y,z) {
//     console.log(`3. add(${x},${y},${z}) invoked.`);

//     var sum=x+y+z;

//     return sum;
    
// } // add

function add(x,y) {
    console.log(`4. add(${x},${y}) invoked.`);

    // 함수블록 안에서만 사용가능한 객체로 arguments가 있다. 
    // Arguments타입의 객체 - 모든 전달인자를 보관하는 객체(Like-array object)
    // 초과해서 준 인자값이 필요할 때 arguments를 통해 얻을 수 있다. 
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
    
    var sum=x+y;

    return sum;
} // add

//-------------------------------//

// 함수호출 테스트
var r0=add();
var r1=add(1);
var r2=add(2,3);
var r3=add(4,5,6);
var r4=add(7,8,9,10);     

console.log('A. add() -> 함수 호출 인자 없음:', r0);
console.log('B. add(1) -> 함수 호출 인자 부족:', r1);
console.log('C. add(2,3) -> 정상적인 함수 호출:', r2);
console.log('D. add(4,5,6) -> 4,5만 인자값으로 적용:', r3);
console.log('E. add(7,8,9,10) -> 7,8만 인자값으로 적용:', r4);

