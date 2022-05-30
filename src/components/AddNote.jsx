import { useState } from "react";
const charterLimit = 200;
const AddNote =({handleAddNote}) =>{

    const [noteText , setNoteText] = useState('')

    const handeleChamge =(event) =>{

          if(charterLimit - event.target.value.length >= 0){
              setNoteText(event.target.value);
          }
    };

    const handeleSaveClick = () =>{
        if (noteText.trim().length >0)
        {
            handleAddNote(noteText);
            setNoteText('');
        }
        else{
               alert("Note does not contain text")  

        }
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

<small> {charterLimit - noteText.length} Rrmaiming</small>
<button className = "save" onClick={handeleSaveClick}>Save</button>
</div>
</div>





    );
}

export default AddNote;