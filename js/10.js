var day; // undefined

// new 연산자는 자바언어와 동일, 뒤에 나오는 것 역시 생성자로 동일
var week=new Date().getDay(); // 0(일요일)~6(토요일)

switch(week){
    case 0:
        day="일요일"; break;
    case 1:
        day="월요일"; break;
    case 2:
        day="화요일"; break;
    case 3:
        day="수요일"; break;
    case 4:
        day="목요일"; break;
    case 5:
        day="금요일"; break;
    case 6:
        day="토요일"; break;
    default:
        day="없는 요일";
} // switch

console.log('오늘은',day,'입니다');