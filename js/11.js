var x,y; // 두 변수 모두 undefied. 
        // 주의 - 두 변수 동시에 선언하는 것 보다, 자바언어처럼 각각의 변수를 별도로 선언할 것

for(x=2; x<=5; x++){
    console.log('----['+x+'단]---');
    
    for(y=1; y<=9;y++){
        console.log(x,'*',y,'=',(x*y));
    } // inner nested for
} //outer-for