var arr=['a','b','c','d','e','f','g','h','i'];

// slice(startindex, endindex) : half-open(endindex exclusive)
var str1=arr.slice(0,4);
var str2=arr.slice(2,-1);
var str3=arr.slice(-4,-2);
var str4=arr.slice();

console.log('부분배열1:' ,str1);
console.log('부분배열2:' ,str2);
console.log('부분배열3:' ,str3);
console.log('부분배열4:' ,str4);

console.log('original:', arr);