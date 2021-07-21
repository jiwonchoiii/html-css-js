var city=[1,2,,4, ,6]; // 배열 변수 선언
// 원소의 위치에 값이 없으면 undefined

// 인덱싱 기법으로, 새로운 원소의 추가 가능 
// city[0]='seoul';
// city[1]='la';
// city[2]=[1,2,3]; // 원소로 다른 배열을 넣음
// city[3]=true;
// city[4]=10.1;
// city[5]=undefined;


for(var element of city){
    if(element!==undefined){ // 값과 타입이 모두 undefined가 아니면
        console.log('-element:', element);
    }
}// for

// for(var index in city){
//     console.log('-city:',city[index]);
// }