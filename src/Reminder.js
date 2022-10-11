// Reminder.js
const Reminder = (props) => {
    const handleClick = () => {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                done: !props.done // set it to the opposite of the current value
            })
        }
        const requestUrl = 'http://localhost:4000/reminders/' + props.id
        fetch(requestUrl, requestOptions)
    }

    return (
        <div>
            <input type="checkbox" onClick={handleClick} name={props.id} defaultChecked={props.done}/>
            <label for={props.id}>{props.title}</label>
        </div>
    )
}

export default Reminder
