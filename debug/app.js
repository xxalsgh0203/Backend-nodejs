function sayHello(){
    console.log('Hello');
}

function calculate(x, y){
    console.log('calculating..');
    const result = x + y;
    console.log('result: ', result);
    sayHello();
    return result;
}

calculate(1, 2);

const stop = 4;
console.log('.... looping ....');
for(let i=0; i<10; i++){
    if(i === stop)
        break;
}