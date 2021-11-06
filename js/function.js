// 함수 선언문 방식
// function add(x,y){
//     return x+y;
// };

// 함수 표현식 방식
var add = function (x,y){ // add는 함수를 참조하는 변수이지, 함수 이름이 아니다.
    return x+y;
};

var plus = add; // 함수 변수 add는 함수의 참조값을 가지므로 또다른 변수에도 그 값을 그대로 할당할 수 있다.

console.log(add(3,5));
console.log(plus(3,5));


var a = function b(x,y){
    return x+y;
};

console.log(a(1,1));
// console.log(b(1,1)); // uncaught reference error

// 함수 표현식 방식으로 구현한 팩토리얼 방식
var factorialVar = function factorial(n){
    if(n<=1){
        return 1;
    }

    return n * factorial(n-1);
};

console.log(factorialVar(5));
// console.log(factorial(5)); // uncaught reference error

// 함수 호이스팅
console.log('before', ttt(1,10));
function ttt(x,y){
    return x-y;
}
console.log('after', ttt(1,10));

// 함수 호이스팅이 발생하는 원인: 자바스크립트의 변수 생성과 초기화 작업이 분리되어서 진행되기 때문

// 함수도 객체이기 때문에 프로퍼티를 가질 수 있다.
add.result = add(3,2);
add.status = 'OK';

console.dir(add);

// 함수를 다른 함수의 인자로 넘길 수 있다
var foo = function (func){
    func(); // 인자로 받은 func() 함수 호출
};

foo(function(){
    console.log('function can be used as the argument');
});

// 함수를 리턴값으로 활용할 수 있다
var foo = function (){
    return function (){
        console.log('this function is return value');
    };
};

var bar = foo();
bar();


// 즉시 실행 함수
(function (name){
    console.log('this is the immediate function -> ' + name);
})('foo');

// 내부 함수는 일반적으로 자신이 정의된 부모 함수 내부에서만 호출이 가능하다. (함수 스코핑때문)
// 부모 함수에서 내부 함수를 외부로 리턴하면, 부모 함수 밖에서도 내부 함수를 호출하는 것이 가능하다.

function parent(){
    var a = 100;

    var child = function (){
        console.log(a);
    } // child

    return child;
} // parent

var inner = parent();
inner();

// 실행이 끝난 parent()와 같은 부모 함수 스코프의 변수를 참조하는 inner()와 같은 함수를 클로저라고 한다.

// 자바스크립트에서는 함수도 일급 객체이므로 일반 값처럼 함수 자체를 리턴할 수도 있다.
// 함수를 호출함과 동시에 다른 함수로 바꾸거나, 자기 자신을 재정의하는 함수를 구현할 수 있다.

// 자신을 재정의하는 함수 예제 코드
var self = function (){
    console.log('a');
    return function (){
        console.log('b');
    }
}


self = self(); // a
self();        // b
// 함수가 한번 호출된 뒤에는 self 함수 변수가 가리키는 함수가 리턴받은 새로운 함수로 변경된다.
