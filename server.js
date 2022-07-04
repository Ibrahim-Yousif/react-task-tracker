const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extened : true }));

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());


app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'build', 'index.html'));
    res.send('hi')
});

app.post('/api', (req, res) => {
    console.log(req.body);
    res.end()
});





const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})