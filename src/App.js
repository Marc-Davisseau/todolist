
import './App.css';
import { useState } from "react";
import Task from './components/Task';


import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);

// style={{backgroundColor: checked===false ? "blue" : "red"}}

//key={index} style={{color: checked===false ? "blue" : "red"}}


function App() {
  const [tab, setTab] = useState([]);
  const [task, setTask] = useState("");
  // const handleTaskChange = event => {
  //    const value = event.target.value;
  //    setTask(value)};
  const handleSubmit = event => {
    event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
  

  }
  return (


    
    <div className="App">

<div className='bloc'>
    {tab.map((item, index) => {return (item)})}
</div>
   


<form onSubmit={handleSubmit}>
<h1>Todo List</h1>
<input type="text" placeholder='new task' onChange={(event)=>{setTask(event.target.value)}} value={task}/>
  <button 
  onClick={()=>{
    const newTab = [...tab];
    newTab.push(<Task put={task}/>);  
    setTab(newTab) 
  }
  }>Add task</button>

</form>



</div>
)
}
export default App;
