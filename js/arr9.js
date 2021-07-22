// splice: 배열의 원소 추가 또는 제거

var kdata=['가','나','다','라','마'];

var str1=kdata.splice(1,2);
// var str1=kdata.splice(1);
console.log("삭제 데이터:", str1);
console.log("남은 배열:",kdata);

//--------------------------------//

// (method) Array<string>.splice(start: number, deleteCount: number, ...items: string[]): string[] (+1 overload)    ...items: rest parameter 

var str2=kdata.splice(1,1,'바','사'); // 삭제하고, 그 위치에 새로운 요소를 추가한다
console.log("삭제 데이터:", str2);
console.log("남은 배열:",kdata);


//--------------------------------//

var str3=kdata.splice(2,Number.MAX_VALUE); // 인덱스2부터 나머지 원소는 모두 삭제 
console.log("삭제 데이터:", str3);
console.log("남은 배열:",kdata);


var str4=kdata.splice(2,0,'오산');  //삭제를 안하고 추가만 할 수도 있다. 둘다 옵션, 동시 수행도 가능
console.log("삭제 데이터:", str4);
console.log("남은 배열:",kdata);


