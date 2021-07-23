var arr=[10,20,30,40,30,60,70,30,90,100];


// (method) Array<number>.indexOf(searchElement: number, fromIndex?: number): number

console.log('배열 데이터: [',arr,']');
console.log('처음부터 검색한 30의 인덱스',arr.indexOf(30));
console.log('마지막에서 검색한 30의 인덱스',arr.lastIndexOf(30));
console.log('세번째부터 검색한 30의 인덱스',arr.indexOf(30,3));
console.log('처음부터 검색한 300의 인덱스',arr.indexOf(300));