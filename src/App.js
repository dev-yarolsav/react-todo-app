import React from 'react';
import './App.css';

import Navbar from "./components/layout/Navbar";
import TodoPage from "./pages/TodoPage";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import PostsViewPage from "./pages/PostsViewPage";

import {Switch, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="p-2 container">
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/todo' component={TodoPage}/>
                    <Route exact path='/posts' component={PostsPage}/>
                    <Route path='/posts/:id' component={PostsViewPage}/>
                    <Route render={() => <h1>404: page not found</h1>} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
