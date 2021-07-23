var car={
    name: 'sonata',
    speed:100,
    color: 'white',

    run: function () {
        console.log('달리자!');
    } // run
};

console.log('-car:',car);
console.log('\t+ name:',car.name); 
console.log('\t+ speed:',car['speed']); // 도트연산자를 주로 사용함
console.log('\t+ color:',car.color); 


car.run();
car['run'](); 