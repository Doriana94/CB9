import { useState } from 'react'
import './AddTask.css'
import { nanoid } from 'nanoid'


const AddTask =({setTasks = () => {}, tasks = [] }) => {
const [inputValue, setInputValue] = useState ('')

    return (
        <form type='submit'>
            <input 
            className='input-task'
            type='text'
            placeholder='Inserisci la tua task'
            onChange={(event) =>{
                setInputValue(event.target.value)
            }} 
            />
            <button 
            className='button-task'
            type='submit'
            onClick={(event) =>{
                event.preventDefault();
                setTasks([...tasks, {id: nanoid(),  text: inputValue }])
            }}
            >
               Insert
           </button>
        </form>
    )
}

export default AddTask


