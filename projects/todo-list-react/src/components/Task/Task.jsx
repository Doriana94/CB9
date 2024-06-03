import { useEffect } from 'react';
import './Task.css';

const Task = ({text, handleClick}) => {

    useEffect(() => {
        console.log('Task Mounted')

        return () => {
            console.log('Task Unmounted')
        }
    }, [])

    return (
        <li className="task">
            <span onClick={handleClick} className='close-button'>
                x
               </span>{''}
            {text}
        </li>
    )
}

export default Task