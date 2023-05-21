const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Red Dragon Raising')
});

app.get('/categories', (req, res) =>{
    res.send(categories)
});

app.listen(port, () =>{
    console.log(`Dragon cant wait to expose through: ${port}`);
})