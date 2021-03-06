const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(__dirname + '/dist/cadastro-usuarios-angular'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/cadastro-usuarios-angular/index.html'))
})

app.listen(process.env.PORT || 3000);