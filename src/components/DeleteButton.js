import React from "react"


function DeleButton({id, deleteAppointment}){
    return (
        <button onClick={() => deleteAppointment(id)}>Delete</button>
    );
}

export default DeleButton

