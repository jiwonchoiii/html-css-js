var result;    // 전역변수

function add(name, n) {
    console.log(name,'학생이 1부터',n,'까지 덧셈 수행');

    var sum=0; // 지역변수

    for(var i=1; i<=n; i++){
        sum+=i;
    }// for

    return sum; // 호출자에게 값을 리턴
} // add


console.log('1. 결과:',add('최지원',10));
console.log('2. 결과:',add('trinity',100));
//리턴값을 다른데에서 또 쓴다면 변수에 담고, 그렇지 않다면 위의 코드처럼 바로 사용한다.