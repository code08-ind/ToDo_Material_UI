import React, { useState } from 'react';
import ToDolists from './ToDoLists';

const App = () => {

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

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((item, index) => {
        return index !== id;//if item found so delete it if index matches with id.
      });
    });
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <div className="inputText">
            <input type="text" placeholder="Enter The Todo Item" onChange={itemEvents} value={inputList} />
            <button onClick={listOfItems}> + </button>
          </div>
          <ol>
            {/* <li> {inputList}</li> */}
            {items.map((element, index) => {
              return <ToDolists
                key={index}
                id={index}
                text={element}
                onSelect={deleteItem}
              />
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
