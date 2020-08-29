import React from 'react';
import './App.css';

import TodoList from "./components/todo/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
      <div>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
