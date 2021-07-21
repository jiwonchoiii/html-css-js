var arr=[10,20,30,40,'50'];

function printArr(){
    var i, sum=0;

    // for(i=0; i<arr.length;i++){
    //     sum+=arr[i];
    // } // for

    for(var num of arr){
        sum+=num;
    } // enhanced for
    
    return sum;
}// printArr

var result=printArr();
console.log('배열 원소 합',result);