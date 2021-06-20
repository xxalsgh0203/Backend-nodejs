function hello(){
    console.log(this);
    console.log(this === global);
}

hello();

class A{
    constructor(num){
        this.num = num;
    }
    memberFunction(){
        console.log('-------class-------');
        console.log(this);
        console.log(this === global);
    }
}

const a = new A(1);
a.memberFunction();


console.log('-------global scope-------');
console.log(this);
console.log(this === module.exports); 
// 브라우저에서 밖에 있는 this 는 global 을 가르키나 node 에서는 module 의 export 를 가르킨다.
