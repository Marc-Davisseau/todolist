
import './App.css';
import { useState } from "react";
import Task from './components/Task';
// import Search from './components/Search';
// import data from "./data.json"

import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);
let tabBis = [];
function App() {


  const [tab, setTab] = useState([]);
  const [task, setTask] = useState("");
  const [input, setInput] = useState("");
  const [param, setParam] = useState(false);
  // const [tabBis, setTabBis] = useState([])

  const handleSubmit = event => {
    event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
  
  }

 const handleInputChange = event => {
  event.preventDefault()
  tabBis = []
  setInput(event.target.value)
  console.log(param)
  for (let i = 0; i < tab.length; i++) {  

   if (tab[i].props.put.indexOf(input) !== -1) {
     tabBis.push(<p key={tab[i].props.put}>{tab[i].props.put} </p>
        )}
          }}

  return ( 
    <div  style ={{background:param===true?"blue":"white" , color:param===true?"white":"black"}}>


<div className='bloc'>
    {
    
  tab.map((item, index) => {return (item)})} 
</div>
   
<form onSubmit={handleSubmit }>
<h1>Todo List</h1>
<input type="text" placeholder='new task' onChange={(event)=>{setTask(event.target.value)}} value={task}/>
  <button 
  onClick={()=>{
       const newTab = [...tab]
    newTab.push(<Task put={task}/>);
    setTab(newTab)
  }
  }>Add task</button>

</form>


<div>
  <h3>Search</h3>
  <input
        value={input}
            onChange = {handleInputChange}
        type="text"
        placeholder="Your Search"
  
/>
</div>

<div>
 {tabBis.map((search) => {
         return (
          <p>
            {search.props.children[0]} 
          </p>
        );
      })}
    </div>

<button

onClick={()=>setParam(!param)}>Dark/Light</button>

</div>


)
}

export default App;
