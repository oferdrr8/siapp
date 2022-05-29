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
        </div>

);
}
export default NotesList;