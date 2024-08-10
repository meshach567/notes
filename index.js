import express from "express";
import { getNote, getNotes, createNote } from "./database.js";

const app = express();

app.use(express.json());

app.use('/notes', async (req, res) => {
    const notes = await getNotes();
    res.send(notes)
});

app.use('/notes/:id', async (req, res) => {
    const id = req.params.id;
    const notes = await getNote(id);
    res.send(notes)
});

app.use('/notes', async (req, res) => {
    const  { title, contents} = req.body;
    const note = await createNote(title, contents);
    res.status(201).send(note);
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something Broke');
})

app.listen(8080, () => {
    console.log('Server listen to 8080')
})