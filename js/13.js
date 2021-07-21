var x=0;
var sum=0;

while(1){
    if(x%3!=0){ //skip 수행
        continue;
    } // if
    
    sum+=x;
    console.log(x,'');
    ++x;
    
    if(x>100){
        break;
    } // if

} // infinite loop

console.log('1~100까지의 수 중 3의 배수의 합',sum);
