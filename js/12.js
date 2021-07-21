var x=1;
var sum=0;

while(1){ // 1은 true와 같다 -> 무한반복. 
          // 0을 제외한 모든 숫자는 true를 의미한다. 
    sum+=x;
    x++;

    if(x==10001){
        break;
    }
} // infinite loop

console.log('1~10000까지의 합:',sum);