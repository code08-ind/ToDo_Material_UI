import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ToDoCom from './ToDoCom';

const ToDoList = () => {

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvents = (event) => {
        setInputList(event.target.value);
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add A ToDo" onChange={itemEvents} value={inputList} />
                    <Button variant="contained" className="newBtn" onClick={listOfItems}> <AddIcon /> </Button>
                    <br />
                    <ol>
                        {items.map((element,index) => {
                            return (
                                <ToDoCom
                                    key={index}
                                    text={element}
                                /> 
                            );
                        })}
                    </ol>
                    <br />
                </div>
            </div>
        </>
    );
}

export default ToDoList;