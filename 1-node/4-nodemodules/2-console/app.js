console.log('logging...');
console.clear();

// log level
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warn'); // 경보
console.error('error'); // 에러, 사용자 에러, 시스템 에러

// assert . 특정한 조건일 때 로그 출력
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

// print object 
const student = {name: 'minho', age: 25, company: {name: 'AC '}};
console.log(student);
console.table(student); // 테이블로 보기 좋게 object 보여줌\
console.dir(student, {showHidden: true, colors: false, depth: 2}); // log 와 같으나 option 추가가능

// measuring time
console.time('for loop');
for(let i=0; i<10; i++){
    i++;
}
console.timeEnd('for loop');

// counting 
function a(){
    console.count('a function');
}
a();
console.countReset('a function');
a();

// trace
function f1(){
    f2();
}
function f2(){
    f3();
}
function f3(){
    console.log('f3');
    console.trace();
}
f1();