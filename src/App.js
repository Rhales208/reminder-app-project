import TextField from '@mui/material/TextField';
import {React, useState } from 'react';
import { Button } from '@mui/material';


function App() {
  const [todoInput, setTodoInput] = useState('');//blank for input value,blank answer goes to todoInput


  function addReminder(e) {
    e.preventDefault();//stops page from reloading after submit and erasing
    console.log(`you are trying to add a todo`);
  }
   return (
    <div className='boca-code-reminder-app'
         style={{
           display: "flex", 
           flexDirection:"column", 
           justifyContent: "center",
           alignItems: "center",
            }}
            >
            <div>
           <h1>Reminder App</h1>
     <form>{/*if you want button clicked whenever you hit enter wrap it in form*/}
     <TextField 
     id="standard-basic" 
     label="Add a reminder" 
     value ={todoInput}//will save input in todoimput
     onChange={(e) => setTodoInput(e.target.value)}
  //onchange detects input change
     style={{maxWidth:"300px", width: "90vx" }}//help the length shorter
     />
     <Button type="sumbit" variant="contained" onClick={addReminder}>+</Button>
     </form>
    </div>{/*mui coponents*/}
    </div>//this div make the components and the h1 shorter
  );
}

export default App;