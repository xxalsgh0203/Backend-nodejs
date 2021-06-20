let count = 0;

function increase(){
    count++;
}

function getCount(){
    return count;
}

module.exports.getCount = getCount;
// module.exports.increase = increase;
console.log(module.exports === exports);
exports = {}; // 처음에는 module 을 가르키지만 exports 에 다른 값을 할당하게 되면 전혀다른 아이가 되버림
exports.increase = increase; // module 생략가능하지만 엄밀히 다름
console.log(module.exports === exports);


console.log(module);