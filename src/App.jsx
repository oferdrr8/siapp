import { useEffect, useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList';
import Search from './components/sarch';
import Header from './components/header';

function App() {

  const [notes,setNotes] = useState([
    {
   id:nanoid(),
    text:"this is ferst note",
    date:"22/03/22"
  },
  

]);

const [searchText , setSearchText] = useState('');
const [darkMode , setdarkMode] = useState(false);

useEffect(()=>{
    const savedNotes= JSON.parse(
      localStorage.getItem('react-notes-app-data')
      );
    if(savedNotes){
      setNotes(savedNotes);
    }
} ,[]);

useEffect(()=>{
   localStorage.setItem(
     'react-notes-app-data',
     JSON.stringify(notes)
     );
} , [notes]);

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
    <div className= {`${darkMode && 'dark-mode'}`}>
<div className="container">

     < Header handleToggleDarkMode={setdarkMode} />
    <Search  handleSearchNote={setSearchText} />
    <NotesList notes={notes.filter((note) => 
      note.text.toLowerCase().includes(searchText))}  handleAddNote={addNote} handeleDelete = {deleteNote}/>

      </div>
      </div>
    </>
  );

}

export default App;
