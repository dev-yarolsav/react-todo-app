import React from 'react';
import './App.css';

import Navbar from "./components/layout/Navbar";
import TodoPage from "./pages/TodoPage";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import PostsViewPage from "./pages/PostsViewPage";

import {Switch, Route} from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
padding: 1em;
color: gray;
font-style: italic;
`

const SmallerDiv = styled(Div)`
font-size: 10px;
`

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
            <Div>
                This is styled-component!
                <SmallerDiv>This is smaller styled-component!</SmallerDiv>
            </Div>

        </div>
    );
}

export default App;
