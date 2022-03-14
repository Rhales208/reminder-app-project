import TextField from '@mui/material/TextField';
import React, {useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { dblClick } from '@testing-library/user-event/dist/click';


function App() {
  const [reminders, setReminders] = useState();
  const [todoInput, setTodoInput] = useState('');//blank for input value,blank answer goes to todoInput

  function addReminder(e) {
    e.preventDefault();
    
    fetch('https://boca-code-reminder-app.uc.r.appspot.com/reminders', {
      method: 'POST',//sending body to api sending input
      headers: {'Content-Type': 'application/json',
      },
      body: JSON.stringify({todo: todoInput}),
    })
    .then(response => response.json())//.thens and catch are the same as much todo app
    .then(data => console.log(data))
    .catch(err => console.log(err))//stops page from reloading after submit and erasing
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
     <Button type="sumbit" 
     variant="contained" 
     onClick={addReminder}>+</Button>
     </form>
     
     {reminders?.map((reminder) => (
       <p>{reminder.reminder}</p>
     ))}
    </div>
    </div>
   );

} 
export default App