var arr=[21,42,33,14,25,12,37,28,16,11];

// function task(item) {
//     console.log(`>>> task(${item}) invoked.`);

//     return item >=18; // 필터링 조건 정의
// } // task

// 배열의 각 원소에 대해 우리가 지정한 조건에 부합하는 원소만 필터링 수행
// var filteredArr=arr.filter(task);
var filteredArr=arr.filter((item) => item >=18);




console.log('필터 전 배열:',arr);
console.log('필터 후 배열:',filteredArr);
