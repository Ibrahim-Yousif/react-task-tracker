import React from 'react'
import Header from './header'
import Form from './form'
import Footer from './footer';
import Task from './task';

import taskData from '../data/taskData';


function TaskBox(){
    return <div className='task-box'>
              <Header />
              <Form />
              {taskData.map(task => {
                return <Task title={task.title} date={task.date} reminder={task.reminder} />
              })}
              <Footer />
    </div>;
}

export default TaskBox;