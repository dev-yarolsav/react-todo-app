import React from 'react';

import Navbar from "pages/layout/Navbar";

import HomePage from "./HomePage";
import TodoPage from "./TodoPage";
import PostsPage from "./PostsPage";
import PostsViewPage from "./PostsViewPage";
import AppLoginPage from "./app/AppLoginPage";
import AppLogoutPage from "./app/AppLogoutPage";
import MyProfilePage from "./MyProfilePage";

import {Route, Switch} from "react-router-dom";

import {HomePath, LoginPath, SignupPath} from "routes";

import AppSignupPage from "./app/AppSignupPage";

export default function RootPage () {
    return (
        <div>
            <Navbar/>
            <div className="p-2 container">
                <Switch>
                    <Route exact path={HomePath()} component={HomePage}/>
                    <Route path='/todo' component={TodoPage}/>
                    <Route exact path='/posts' component={PostsPage}/>
                    <Route path='/posts/:id' component={PostsViewPage}/>
                    <Route path='/profile' component={MyProfilePage}/>
                    <Route path={LoginPath()} component={AppLoginPage}/>
                    <Route path={SignupPath()} component={AppSignupPage}/>
                    <Route path='/logout' component={AppLogoutPage}/>
                    <Route render={() => <h1>404: page not found</h1>} />
                </Switch>
            </div>

        </div>
    )
}