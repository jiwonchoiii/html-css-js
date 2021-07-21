function getGrade(){ // function에서는  return타입을 명시하지 않는다. 
    var kor=95;

    return kor;  
} // getGrade

var getKor = getGrade();
console.log('국어 점수:',getKor);