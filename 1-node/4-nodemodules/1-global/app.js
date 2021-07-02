// 자바스크립트는 이게 브라우저용인지 노드 용인지 모르기 때문에 알려주기 위해 노드 모듈중에 하나인 아이를 import 해와줌
const fs = require('fs');

console.log(global);

global.hello = () => {
    global.console.log('hello');
}

global.hello();
hello();