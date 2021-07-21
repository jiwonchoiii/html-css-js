// new 객체생성연산자와 배열 생성자 함수를 이용한
// 배열객체 생성방법 두번째!

// var city=new Array('la','ny','dc'); // Array생성자의 매개변수는 가변인자
// console.log('-city:',city);

// function printArr() {
//     var i;

//     for(var element of city){
//         console.log('-element:',element);
//     }// enhanced for
// } // printArr

// printArr();

var arr=[1,2,3];
console.log('1. typeof arr',typeof arr);
console.log('2. Array.isArray(arr)', Array.isArray(arr));
console.log('\t+ Array', Array);
console.log('3. arr instanceof Array:', arr instanceof Array);