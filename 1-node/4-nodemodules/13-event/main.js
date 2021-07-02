const logger = require('./logger.js');
const emitter = new logger.Logger();

// 이벤트 emitter는 한번 객체를 만들면 그 객체내에서 발생하는 이벤트에 한해서 이벤트를 들을 수 있다
// 여러가지 이벤트 이벤트 emitter 객체를 만들면 다른 이벤트 emitter 에서 발생하는 emitter는 다른 emitter에서 들을 수 없다.

emitter.on('log', (event) => {
  console.log(event);
});

emitter.log(() => {
  console.log('..... ꝍ loopings ꝍ....');
  for (let i = 0; i < 5; i++) {
    console.log('count', i);
  }
});
