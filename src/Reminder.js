
import {useState, useEffect} from 'react'
import Reminder from "./Reminder";

const RemindersList = () => {
    const [reminders, setReminders] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/reminders')
            .then((response) => {
                return response.json()
            }).then((responseBody) => {
                const remindersFromApi = responseBody.data.reminders
                setReminders(remindersFromApi)
        })
    }, [])

    return (
        <div className={'remindersList'}>
            {reminders.map((reminder) => <Reminder
                id={reminder.id}
                title={reminder.title}
                done={reminder.done}
            />)}
        </div>
    )
}

export default RemindersList
