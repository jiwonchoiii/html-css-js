var ndata1=[19,38,67,26,55,24,53,12,31];
var ndata2=[132,2,41,123,45,1234,6,29,4567];

var edata=['apple','html','game','computer','java'];
var kdata=['가','나','다','라','마'];

console.log("수치 정렬1:",ndata1.sort());
console.log("수치 정렬2:",ndata2.sort());

console.log("수치 정렬3:",
    ndata2.sort(
        // 서로 자릿수가 틀린 수치를 원소로 가지는 배열을 정렬할 때에는, 
        // (1) 아래와 같이 비교자(comparator) 제공해야만, 
        // (2) 제대로 정렬이 가능하고, 내림차순/오름차순을 제어할 수가 있음 
        function (a,b) {
            // return a-b; // 오름차순
            return b-a; // 내림차순
        } // comparator;
    ) //sort
);
