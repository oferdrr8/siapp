import AddNote from "./AddNote";
import Note from "./Note";

;

const NotesList =({notes})=>{
    return(
        <div className="container">

 <div className = "notes-list">
     {notes.map((notes) => (
      <Note id={notes.id} text={notes.text} date={notes.date} />
      ))}
</div>
    
<AddNote />
        </div>

);
}
export default NotesList;