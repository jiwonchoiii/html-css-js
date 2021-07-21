function getGrade(){ // 함수 정의
   kor=95;    // 전역 변수 값을 변경
} // getGrade

var kor=100;  // 전역 변수 값을 초기화 

getGrade(); // 함수가 호출되어야 함수 실행. var값이 100이었다가 95로 변경됨  

console.log('국어 점수 :', kor);