// 연관 배열은 자바의 map과 비슷하다(key,value)
// 배열임에도 대괄호가 아니라 중괄호로 만든다.

var accArr={'f0':100,'f1':200,'f2':300};
console.log('accArr:',accArr);

// 1st. method - indexing을 통해, 특정 원소의 값 추출
accArr['f3']=400; //새로운 배열 원소 생성

// 2nd. method - 도트연산자(객체멤버참조연산자)를 이용한 특정 원소의 값 추출
accArr.f4=500; // 새로운 배열 원소 생성

// 1st. method - indexing을 통해, 특정 원소의 값 참조(사용)
console.log(accArr['f2']);
console.log(accArr['f3']);
console.log(accArr['f4']);

// 2nd. method - 도트 연산자(객체멤버참조연산자)를 이용한 특정 원소의 값 참조(사용)
console.log(accArr.f0); // 'f0' 키 데이터 조회
console.log(accArr.f1); // 'f1' 키 데이터 조회 

