import React, {useState} from 'react';

function Task(props){
    let [reminder, setReminder] = useState(props.reminder);

    function toggleReminder(){
        setReminder(!reminder);
    }
    return <div className='task' onDoubleClick={toggleReminder} data-reminder={reminder}>
        <div className='task-row' >
            <h3 className='title'>{props.title}</h3>
            <i>x</i>
        </div>
         <p className='day-time'>{props.date}</p>
         </div>;
}

export default Task;