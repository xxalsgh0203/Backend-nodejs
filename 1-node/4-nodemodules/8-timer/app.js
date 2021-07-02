// call stack 과 task queue 를 넘나드는 Timer !
// global 객체에 정의되어져 있기 때문에 따로 import 안해도 된다

let num = 1;
const interval = setInterval(() => {
    console.log(num++);
}, 1000); // 1초마다 전달한 콜백함수를 실행

setTimeout(()=>{
    console.log('Time out!');
    clearInterval(interval);
}, 6000); // setTimeout 이라는 node API 를 통해 interval 을 멈춤