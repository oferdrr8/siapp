import { useState } from "react";

const AddNote =({handleAddNote}) =>{

    const [noteText , setNoteText] = useState('')

    const handeleChamge =(event) =>{
          console.log (event.target.value);
          setNoteText(event.target.value);
    };

    const handeleSaveClick = () =>{
        handleAddNote(noteText)
    }

    return (

<div className="note new">
 <textarea
  rows="8" 
  cols="10" 
  placeholder="Type to add a note"
  value={noteText}
   onChange={handeleChamge}
   > </textarea>

<div className="note-footer">

<small> 200 Rrmaiming</small>
<button className = "save" onClick={handeleSaveClick}>Save</button>
</div>
</div>





    );
}

export default AddNote;