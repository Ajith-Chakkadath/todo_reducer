import React from 'react'
import './task.css'

import { useReducer } from 'react'


export default function Task() {

    const initalTask = [{ id:1 , text:'welcome' }]

    const [task , dispatch] = useReducer(taskReducer ,initalTask)


    function taskReducer(task , action){
        switch (action.type){
            case 'add':{
                return [
                    ...task , { id:action.id , text: action.text}
                ]
            }

        }
    }
    
    console.log(task)
    console.log(initalTask)

  return (
    <div>
        <div className='taskname'>
            <h1>ToDo List</h1>
            <div className='task-input'>
                <input type='text' onChange={ ()=> initalTask} />
                <button className='btn' onClick={() => dispatch({type :'add' })}>Add Task</button>
            </div>

        </div>

{
    task.map((value)=>{
        <>
            <div className='taskname'>
            <h1>ToDo List</h1>
            <div className='task-input'>
                <h3>{value}</h3>
                <button className='btn' onClick={()=> dispatch({type :'delete' })}>Delete</button>
            </div>
            </div>
        </>
    })
}

    </div>
  )
}

