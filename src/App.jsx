import { useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList';

function App() {

  const [notes,setNotes] = useState([
    {
   id:nanoid(),
    text:"this is ferst note",
    date:"22/03/22"
  },
  

]);

const addNote =(text) =>{
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text:text,
      date:date.toString(),
      // "00/06/22",
    }
    const newNotes = [...notes , newNote];
    setNotes(newNotes);
}

const deleteNote =(id) =>{
 const newNotes = notes.filter((note) => note.id !== id);
 setNotes(newNotes)
}

  return (
    <>
    <h1>app working</h1>
    <NotesList notes={notes}  handleAddNote={addNote} handeleDelete = {deleteNote}/>
    </>

  );

}

export default App;
