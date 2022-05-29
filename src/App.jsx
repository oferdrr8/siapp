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
  {
    id:nanoid(),
     text:"this is 2 note",
     date:"22/04/22"
   },
   {
    id:nanoid(),
     text:"this is 3 note",
     date:"22/05/22"
   },
   {
    id:nanoid(),
     text:"this is4 note",
     date:"22/06/22"
   }

]);
  return (
    <>
    <h1>app working</h1>
    <NotesList notes={notes} />
    </>

  );

}

export default App;
