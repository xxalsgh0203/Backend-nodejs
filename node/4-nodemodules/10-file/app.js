const fs = require('fs');

// 모든 API 는 3가지 형태로 제공이 된다.
// 1. rename(...., callback(error, data))  
// 2. try { renameSync(....) } catch(e) { }
// 3. promises.rename().then().catch(0)


// 동기적인 방법으로 파일명 변경
fs.renameSync('./file.txt', './file-new.txt');
console.log('hello');  // 에러 발생하면 코드 죽어버림. 따라서 아래와 같이 try catch 로 감싸줘야 한다

try{
    fs.renameSync('./text.txt', './text-new.txt'); // 동기적. 끝날때까지 다음으로 넘어가지 않음. 가급적 사용 X
} catch(error){
    console.log('error');
}

console.log('hello');


// 비동기적인 방법으로 파일명 변경
fs.rename('./text-new.txt', './text.txt', (error) => {
    console.log('error');
});
console.log('hello');


// promises 형태로 파일명 변경
fs.promises.rename('./text2.txt', './text-new.txt').then(()=>console.log('Done!')).catch(console.error);