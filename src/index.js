import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './app.css';
import App from './App';
import ToDoList from './ToDoList';

ReactDOM.render(
  <React.Fragment>
    <ToDoList />
  </React.Fragment>,
  document.getElementById('root')
);
