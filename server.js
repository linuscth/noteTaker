const express = require('express');
const PORT = process.env.port || 3001;
const app = express();
const path = require('path')
const api = require('./routes/index')


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api )
app.use(express.static('public'));

app.get('/notes', (req,res) => {
console.log('get /note reuest received');
res.sendFile(path.join(__dirname,'/public/notes.html'))});


app.get('*', (req, res) => {
    console.log('get * resquest receiced');
    res.sendFile(path.join(__dirname, '/index.html'))})



app.listen(PORT, () => console.log(`App listening at ${PORT} 🚀`));
