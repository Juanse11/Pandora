import React from 'react'
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SearchPage from '../pages/SearchPage'
import PostPage from '../pages/PostPage'
import PrivateRoute from './PrivateRoute'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" exact={true} component={HomePage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/post/:id" component={PostPage} />
            </Switch>
        </div>       
    </Router>
)

export default AppRouter