// 내장함수(Built-in function): 이미 JS엔진이 만들어 제공하는 함수로, 바로 사용가능
// prompt 함수: 브라우저에서 사용자에게 메시지(=프롬프트)를 보여주고, 입력창을 띄워서, 입력을 받는 창을 호출
var id = prompt('아이디 입력');

if(id=='admin'){

    var password=prompt('비밀번호 입력');
    console.log('typeof password', typeof password);

    if(password==='123456'){ //값과 타입까지 비교(=== 동등비교연산자)
        // location: 내장객체(Built-in object)
        // location.href는, 브라우저의 주소창의 값을 임의로 바꾸는 기능을 수행함(결과로 브라우저의 주소값이 바뀜)
        // 주소가 바뀐다는 의미는, 곧 마치 사용자가 다른 주소에 접속 요청을 한 것과 같음
        location.href="20_login.html";
    } else {
        location.href="20_error.html";
    } // if-else
} else{
    location.href="20_error.html";
} // if-else