import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SearchPage from '../pages/SearchPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" exact={true} component={HomePage} />
                <Route path="/search" component={SearchPage} />
            </Switch>
        </div>       
    </BrowserRouter>
)

export default AppRouter