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
// 의사가 문진을 돌며 환자를 만나듯 배열을 순회한다. 
// 배열의 요소를 순회하며 뭘 할지는 우리가 정하고(task) 매개변수로 준다. 