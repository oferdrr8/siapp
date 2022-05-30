import AddNote from "./AddNote";
import Note from "./Note";

;

const NotesList =({notes , handleAddNote , handeleDelete})=>{
    return(
        <div className="container">

 <div className = "notes-list">
     {notes.map((notes) => (
      <Note id={notes.id} text={notes.text} date={notes.date} handeleDelete={handeleDelete} />
      ))}
</div>
    
<AddNote  handleAddNote={handleAddNote } />
        </div>

);
}
export default NotesList;