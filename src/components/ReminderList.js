import { List } from "@mui/material"
import {useEffect} from "react"


// This is where the reminders should be displayed

export default function ReminderList({setLoading, setReminders, reminder, loading}){
    useEffect(() => {
      setLoading(true)
      fetch('https://boca-code-reminder-app.uc.r.appspot.com/reminders')
        .then(response => response.json())
        .then(data => {
          setReminders(data)
          setLoading(false)
        console.log(reminder[0])
        })
        .catch(err => {
        alert(err)
        setLoading(false)
        })
    }, [])

    return (
      
      <div > 
        {loading ? (<p>Loading...</p>) : reminder.map((d) => <li className='todo-app' // className="reminder-list" imports css to this page
        key={d.id}>{d.todo}</li>)}
      </div>
    )

  }