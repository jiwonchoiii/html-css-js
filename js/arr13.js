var data=[1,2,3,4,5,6,7,8,9,10];
var sum=0;

// var task = function (value){
//     console.log(`>>> task(${value}) invoked.`);

//     sum+=value;
// }; 
// 함수처럼 보이지만 값이므로 세미콜론으로 마무리


var task = value => sum+=value;
 

data.forEach(task);
//직접 순회하면 외부반복하게 되는데, 속도가 매우 느리다. forEach로 내부반복을 하는 것이 좋다.

console.log('배열 데이터 합:',sum);

