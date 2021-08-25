const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use('/resources', express.static(path.join(__dirname + '/public/resources/dist/')));
app.use('/assets', express.static(path.join(__dirname + '/public/resources/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});