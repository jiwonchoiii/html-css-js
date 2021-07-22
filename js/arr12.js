var arr=['la','ny','dc','sf'];

// 배열의 각 원소를 순회할 때마다, 해야될 일을 함수로 만들어서 던진다. 
// function task(item, index) {
//     console.log(`task(${item},${index}) invoked.`);
// } // task

// ES6+ : Arrow function(자바언어에서는 람다식이라고 부름)
var task = (item, index) => {
    console.log(`task(${item},${index}) invoked.`);
} // task

arr.forEach(task);