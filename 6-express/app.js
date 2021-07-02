import express from 'express'
const app = express();

app.get('/sky:id', (req, res, next) => {
    console.log('get');
    console.log(req.params);
    console.log(req.params.id);
    console.log(req.query);
    console.log(req.query.keyword);
    res.send('Minho kim');
});

app.listen(8080); // PORT