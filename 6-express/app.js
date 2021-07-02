import express from 'express'
const app = express();

app.get('/', (req, res, next) => {
    console.log('get');
    res.send('Minho kim');
});

app.listen(8080); // PORT