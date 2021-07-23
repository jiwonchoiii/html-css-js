var arr=[1,2,3,4,5,6,7,8,9,10];

function task(item){
    console.log(`>>> task(${item}) invoked.`);

    return ""+item;
} // task

// map: 자료구조에 있는 각 데이터를 다른 형태로 바꿔주는 작업
// (syntax) Array<number>.map<string>
//  (callbackfn: 
//       (value: number, index: number, array: number[]) => 
//       string, thisArg?: any): string[]

var mapArr=arr.map(task);

console.log('원래 배열:',arr);
console.log('map메소드 적용 배열:', mapArr);