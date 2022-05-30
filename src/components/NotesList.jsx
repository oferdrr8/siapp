import AddNote from "./AddNote";
import Note from "./Note";

;

const NotesList =({notes , handleAddNote , handeleDelete})=>{
    return(
        <div className="container  justify-content-center  bg-dark col-12">

 <div className = "notes-list  d-flex justify-content-center  flex-wrap">
     {notes.map((notes) => (
      <Note id={notes.id} text={notes.text} date={notes.date} handeleDelete={handeleDelete} />
      ))}
</div>
    
<AddNote  handleAddNote={handleAddNote } />
        </div>

);
}
export default NotesList;