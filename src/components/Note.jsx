const Note = ({id,text,date , handeleDelete}) => {
    return(



<div className="note fs-4">
   
<span className=""> {text}</span>

<div className="note-footer fs-6">
           <small>{date}</small>

           <i class=" devicon-codecov-plain bi bi-trash3  mx-2"  onClick={()=>{
         handeleDelete(id)
     }}></i>

     {/* <i className="devicon-codecov-plain mx-2" onClick={()=>{
         handeleDelete(id)
     }}></i> */}

</div>
</div>


 

);
};

export default  Note ;