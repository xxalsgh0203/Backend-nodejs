const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt', 'utf8').then(data => console.log(data)).catch(console.error); 

// write a file
fs.writeFile('./file.txt', 'Hello, Koreano').catch(console.error);

fs.appendFile('./file.txt', 'Hello, Americano').then(() => {
    // // copy
    // fs.copyFile('./file.txt', '.file2.txt').catch(console.error);
    // promise 이기 때문에 비동기로 처리되어 순서가 보장 되지 않는다
    // then 을 이용해서 순차적으로 처리하자
}).catch(console.error);

// copy
fs.copyFile('./file.txt', '.file2.txt').catch(console.error);

// folder
fs.mkdir('sub-folder').catch(console.error);
fs.readdir('./').then(console.log).catch(console.error);