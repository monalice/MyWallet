import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { UserProvider } from './contexts/userContext';
import Main from './components/Main';

const root = document.querySelector("#root");
ReactDOM.render(
    <UserProvider>
        <Router>
            <Switch>
                <Route path="/">
                    <Main />
                </Route>
            </Switch>
        </Router>
    </UserProvider>, root);