import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

// This is the code that creates the reminders and has now been added to appear on App.js

export default function NewReminder() {
  const [reminders, setReminders] = useState();
  const [todoInput, setTodoInput] = useState(""); //blank for input value,blank answer goes to todoInput

  function addReminder(e) {
    e.preventDefault();

    setTodoInput(""); //erases input after hitting enter

    fetch("https://boca-code-reminder-app.uc.r.appspot.com/reminders", {
      method: "POST", //sending body to api sending input
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todo: todoInput }),
    })
      .then((response) => response.json()) //.thens and catch are the same as much todo app
      .then(() => window.location.reload())

      .catch((err) => console.log(err)); //stops page from reloading after submit and erasing
  }
  return (
    <div
      className="boca-code-reminder-app"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Reminder App Anniversary Edition</h1>
        <form>
          {/*if you want button clicked whenever you hit enter wrap it in form*/}
          <TextField
            id="standard-basic"
            label="Add a reminder"
            value={todoInput} //will save input in todoimput
            onChange={(e) => setTodoInput(e.target.value)}
            //onchange detects input change
            style={{ maxWidth: "300px", width: "90vx" }} //help the length shorter
          />
          <Button type="submit" variant="contained" onClick={addReminder}>
            +
          </Button>
        </form>

        {reminders?.map((reminder) => (
          <p>{reminder.reminder}</p>
        ))}
      </div>
    </div>
  );
}
