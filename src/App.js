import React from 'react';
import './App.css';

import Navbar from "./components/layout/Navbar";
import TodoListPage from "./pages/TodoListPage";
import HomePage from "./pages/HomePage";
import {Switch, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="mt-2">
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/todo' component={TodoListPage}/>
                    <Route render={() => <h1>404: page not found</h1>} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
