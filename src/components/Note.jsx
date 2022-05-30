const Note = ({id,text,date , handeleDelete}) => {
    return(



<div className="note fs-4">
   
<span className=""> {text}</span>

<div className="note-footer fs-6">
           <small>{date}</small>
           {/* <i className="fa-solid fa-trash-xmark mx-2 "></i> */}
     <i className="devicon-codecov-plain mx-2" onClick={()=>{
         handeleDelete(id)
     }}></i>

</div>
</div>


 

);
};

export default  Note ;