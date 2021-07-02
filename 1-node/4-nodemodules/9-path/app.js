// nodejs 는 컴퓨터 위에서 동작하기 때문에 파일 시스템에 접근하기 매우 좋다
// 그럴 때 사용하는 path 에 대해 알아보자

const path = require('path');

// POSIX (Unix: Max, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname);
console.log(__filename);

// **** path 를 이용해서 운영체제별로 이렇게 경로표현법이 달라져도 잘 동작할 수 있도록 만드는게 중요하다 ****

console.log(path.sep); // 경로 구분자
console.log(path.delimiter);  // 환경변수 구분자

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

// dirname
console.log(path.dirname(__filename));

// extension
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);

const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname)); // /Users/ (절대경로)
console.log('isAbsolute?', path.isAbsolute('../'));

// normalize
console.log(path.normalize('./folder/////sub'));


// join
console.log(__dirname + path.sep + 'image'); 
console.log(path.join(__dirname, 'image'));