import React from 'react'
import '../css/TodoItems.css'
import cross from './cross.png'
import tick from './tick.png'
import not_tick from './not_tick.png'



export default function TodoItems({ no, text, display, setTodos }) {

    const Delete = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        let index=data.findIndex((val)=>{ return val.no===no});
        data.splice(index , 1);
        localStorage.setItem("todos", JSON.stringify(data));
        setTodos(JSON.parse(localStorage.getItem("todos")));

    }

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        data.map((val) => {
            if (val.no == no) {
                val.display = !val.display;
            }

        })
        localStorage.setItem("todos", JSON.stringify(data));
        setTodos(JSON.parse(localStorage.getItem("todos")));
    }
    return (
        <div className='todoitems'>
            <div className={`todoitems-container  ${display}`} onClick={(e) => { toggle(no); }} >
                {display === false ? <img src={not_tick} alt="" /> : <img src={tick} alt="" />}

                <div className="todoitems-text">{text}</div>
            </div>
            <img className='todoitems-cross-icon' src={cross} alt="" onClick={(e) => { Delete(no); }} />
        </div>
    )
}
