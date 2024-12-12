import "./DateCard.css"
import { useState } from "react";

function DateCard({date, startDate}) {
    const [todos, setTodos] = useState(date.todo);
    const [isModalOpen, setModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState();
    
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const deleteFunction = (_date, _index) => {
        setTodos(todos.filter((_, index) => index !== _index));
    }

    const addFunction = () => {
        if(!inputValue)
        {
            alert("Please Fill the Input Text")
            return;
        }
        setTodos([...todos, inputValue.trim()]);
        setModalOpen(false)
    }

    const modValue = (startDate + date.date) % 7;
    return <li className="date-card">
        {isModalOpen && (
            <div className="modal">
                <div className="modal-content">
                    <h3>Add To Do List ({date.date}日)</h3>
                    <div>
                    <input onChange={handleChange}></input>
                    </div>
                    <button className="apply-btn" onClick={addFunction}>Apply</button>
                    <button className="close-btn" onClick={() => setModalOpen(false)}>Close</button>
                </div>
            </div>
        )}

        <div className="card-title" style={
            {backgroundColor: modValue === 1 || date.holy
            ? "rgb(247, 110, 110)" : modValue === 0 
            ? "rgb(161, 186, 253)" : "rgb(230, 230, 230)"}
            }>{date.date}</div>
        <ul>
            {todos?.map((v, i) => <li key={i}>{v}<div className="delete-button" onClick={() => deleteFunction(date.date, i)}>-</div></li>)}
        </ul>
        <div className="add-job" onClick={() => setModalOpen(true)}>+</div>
    </li>;
}

export default DateCard;