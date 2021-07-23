var arr2D=[[10,20,30,40,0],[60,70,80]];
console.log('arr2D:',arr2D);

arr2D[0][4]=50;
arr2D[1][4]=100;

console.log('2차원배열 첫번째 데이터:',arr2D[0][0]);
console.log('2차원배열 마지막 데이터:',arr2D[1][4]);
console.log('2차원배열 행 길이:',arr2D.length);
console.log('2차원배열 열 길이:',arr2D[0].length);

