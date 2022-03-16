import { useState } from "react"
import NewReminder from "./components/NewReminder"
import ReminderList from "./components/ReminderList"
import './App.css'

// The components for the app will be found in this file

function App() {
  const [loading, setLoading] = useState({})
  const [reminder, setReminders] = useState({})
  
  
  return (
    <div className='todo-app'>
      <NewReminder />
      <ReminderList setLoading={setLoading} setReminders={setReminders} reminder={reminder} loading={loading} />
    </div>
  )

} 
export default App
