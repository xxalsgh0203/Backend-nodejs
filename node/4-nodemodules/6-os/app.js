// 노드가 동작하고 있는 운영체제에 대한 정보를 가진 os 모듈 에 대해서 알아보자
const os = require('os');


// 운영체제에서의 줄바꿈 문자열
console.log(os.EOL === '\n'); // mac
console.log(os.EOL === '\r\n'); //window 


console.log(os.totalmem()); // 최종 메모리
console.log(os.freemem());  // 그중 사용가능한 메모리
console.log(os.type()); // 운영체제의 타입
console.log(os.userInfo()); // 사용자의 information
console.log(os.cpus()); // CPU
console.log(os.homedir()); // 홈 디렉토리
console.log(os.hostname()); // 호스트 네임

// 결론: OS. 즉, 내 서버가 동작하고 있는 환경에 대한 정보를 얻어올때 OS 모듈을 사용할 수 있다.