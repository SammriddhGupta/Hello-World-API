const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello World!');
    res.send('Hello World this is Sam!');
});

app.listen(port, () => {
    console.log(`Test App listening to port ${port}`);
});