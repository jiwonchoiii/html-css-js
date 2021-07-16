var age=23;

console.group('GROUP LOG');
    console.log('외부\'자바스크립트\' 파일');
    console.log("당신의 나이는",age,"입니다");

    console.group('GROUP LOG2');
        console.warn('WARNING');
        console.trace('TRACE');
        console.error('ERROR');
        console.info('INFO');
    console.groupEnd();
    
console.groupEnd();

