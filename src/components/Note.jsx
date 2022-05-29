const Note = ({id,text,date}) => {
    return(



<div className="note">
   
<span className=""> {text}</span>

<div className="note-footer">
           <small>{date}</small>
           <i className="fa-solid fa-trash-xmark mx-2 "></i>
            <i className="devicon-codecov-plain mx-2"></i>

</div>
</div>


 

);
};

export default  Note ;