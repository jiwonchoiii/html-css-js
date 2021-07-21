function getGrade(){ // 함수 정의 
    var kor=95; // 지역변수
} // getGrade

getGrade(); // 함수호출을 함수정의보다 먼저해도 오류나지 않는다. 
            //함수는 1급 객체이므로 무조건 찾아서 객체를 메모리에 만들어 놓는다. 

console.log('국어 점수 :', kor);  // kor라는 전역변수 선언
                              
var kor=100; // 전역 변수
            //  var키워드는 optional이지만 붙이는 것이 좋다 
