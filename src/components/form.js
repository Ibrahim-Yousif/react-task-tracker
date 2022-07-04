import React from 'react';
import Input from './Input';

 
function Form(){
  

    return <form method="post" action='/api'>
        <Input name='task' label='Task'  placeholder='Add Task'/>
        <Input name='dayTime' label='Day & Time'  placeholder='Add Day & Time'/>

        <div className='form-task-save'>
            <label>Set Reminder</label>
            <input type='checkbox' value='on'name='checkbox'></input>
        </div>
        <button>Save Task</button>
    </form>;
}

export default Form;