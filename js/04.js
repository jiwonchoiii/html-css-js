function getGrade(){
    gKor=1000;    // 전역변수
    var lKor=95;  // 지역변수   
                 // 이름이 같은 변수를 두번 선언하면 재선언되어 kor이 지역변수가 된다. 
                 // 같은 이름의 변수를 쓰지 않는다..
} // getGrade

getGrade();

console.log('지역변수의 값은 함수 외부에서 사용할 수 없습니다.');
console.log('국어점수:',kor);
