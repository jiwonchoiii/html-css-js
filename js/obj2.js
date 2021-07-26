var obj={
    m1: function () {
        return "hello sonata";
    },
    m2: function (a) {
        var result=a;
        return result;
    },
    m3: function (a,b) {
        var result=a+b;
        return result;
    }
};

// DOM tree 조작:
// 사용자정의객체의 메소드의 리턴값으로, 위의 문단태그의 Content(즉, 시작태그와 끝 태그 사이의 값)변경

document.getElementById("msg1").innerHTML=obj.m1();
document.getElementById("msg2").innerHTML=obj.m1(100);
document.getElementById("msg3").innerHTML=obj.m1(100,200);