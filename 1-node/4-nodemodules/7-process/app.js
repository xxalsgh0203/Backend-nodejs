const process = require('process'); 

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(()=>{
    console.log('setTimeout');
}, 0);

process.nextTick(()=>{          // 이 콜백함수의 우선 순위를 제일 높혀서 task queue 제일 앞부분에다가 넣어줌
    console.log('nextTick');
})

for(let i=0; i<100; i++){
    console.log('for loop');
}

// 현재 동작하고 있는 노드의 프로세스 정보를 얻을 수 있음