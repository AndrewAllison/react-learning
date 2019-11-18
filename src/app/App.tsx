import React from 'react';
import { BrowserRouter as Router, NavLink, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import Home from '../features/Home';
import About from '../features/About';
import Topics from '../features/Topics/Topics';

import { BarsIcon } from 'react-line-awesome';

import './App.css';

const App: React.FC<RouteComponentProps> = () => {
    return (
        <Router>
            <div className={'toolbar'}>
                <div className={'navigation'}>
                    <ul className={'navigation-list'}>
                        <li className={'navigation-link'}>
                            <NavLink exact={true} activeClassName='is-active' to="/">Home</NavLink>
                        </li>
                        <li className={'navigation-link'}>
                            <NavLink activeClassName='is-active' to="/about">About</NavLink>
                        </li>
                        <li className={'navigation-link'}>
                            <NavLink activeClassName='is-active' to="/topics">Topics</NavLink>
                        </li>
                        <li className={'navigation-link right'}>
                            <BarsIcon className={'menu-icon'}/>
                        </li>
                    </ul>
                </div>
                <div className={'main-container'}>
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/topics">
                            <Topics/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default withRouter(App);
