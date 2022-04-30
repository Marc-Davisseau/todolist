import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const handleSubmit = event => {
    event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
}

const Task = (props) => {
const [checked,setChecked] = useState(false);
const [checked2,setChecked2] = useState(false);

return (
  
<li  style={{textDecorationLine: checked===true ? "line-through" : ""
,
display: checked2===true ? "none" : ""
}
}
>
    <input type="checkbox"

 onClick={()=> setChecked(!checked)}

 onSubmit={handleSubmit}

/>{props.put}
<input  className="check2" type="checkbox"

onClick={()=> setChecked2(!checked2)}

onSubmit={handleSubmit}

/>
<FontAwesomeIcon icon="trash" className="icon"/>
</li>
)
}

export default Task

