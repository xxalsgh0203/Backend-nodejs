// Buffer : Fixed-size chunk of memory (고정된 사이즈의 메모리 덩어리)
// array of integers, byte of data
const buf = Buffer.from('Hi');
console.log(buf);
// 출력값 : <Buffer 48 69>  유니코드로 출력됨.

console.log(buf.length);
// 출력값: 2

console.log(buf[0]);
console.log(buf[1]);
// 출력값: 72, 105
// 배열로 접근하면 아스키 코드로 출력됨

console.log(buf.toString('utf-8'));

// create
const buf2 = Buffer.alloc(2);
// 사이즈가 두개인 버퍼를 만듬
const buf3 = Buffer.allocUnsafe(2); // fast
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2.toString());
buf2.copy(buf3);
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
// 버퍼를 묶어줌