import express from 'express'
const app = express();

app.all('/api', (req, res, next) => {   // 어떤 http request 로 보내든, post로 보내던지, request, get, delete로 보내든 실행이 됨.
    console.log('all');                 // 하지만 오직 /api 경로에 한해서만 실행이 됨
    next();
});

app.use('/sky', (req, res, next) => {   // 어떤 http request 로 보내든, post로 보내던지, request, get, delete로 보내든 실행이 됨.
    console.log('use');                 // all과 다르게 /sky 뒤에 어떤 경로가 오든지 실행이 됨
    next();
});

app.get('/',
    (req, res, next) => {
        console.log('first');
        next(new Error('error'));
    },
    (req, res, next) => {
        console.log('first2');
    }
);

app.get('/', (req, res, next) => {
    console.log('second');
    res.send('MINHO KIM');
});

app.use((req, res, next) => {
    res.status(404).send('Not available!@_@');
})

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send('Sorry, try later!');
});

app.listen(8080); // PORT