const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs/promises');
const { json } = require('express');
const { path } = require('path');

notes.get('/', (req,res) => {
    console.log('get /api/notes request received');
    fs.readFile('db/db.json','utf8').then((data) => res.json(JSON.parse(data)))
});

notes.post('/', (req, res) => {
    const{ title, text} = req.body;
    if (title && text) {
        const newNote = {
        title,
        text,
        id: uuidv4().substring(0,4) };

        console.log(newNote);

        fs.readFile('db/db.json','utf8', (err) => { if (err) {
            console.error(err) } } ).then(
                (data) => {
                let parsedData = JSON.parse(data);
                parsedData.push(newNote);
                console.log(typeof(parsedData));
                fs.writeFile('db/db.json', JSON.stringify(parsedData))})
                .then(
                    res.status(200).json('succeeded')).catch(
                        (err) => console.log(err)
                    )
    }   
})

notes.delete('/:id', (req, res) => {
    const intendedDeleteId = req.params.id;

    fs.readFile('db/db.json','utf8').then(
        (data) => {
            const storedpParsedData  = JSON.parse(data);
            const updatedParsedData = storedpParsedData.filter((note) => note.id !== intendedDeleteId);
            fs.writeFile('db/db.json', JSON.stringify(updatedParsedData))
        }).then(res.status(200).json('succeeded')).catch((err) => console.log(err))
        }
    )
    

module.exports = notes;