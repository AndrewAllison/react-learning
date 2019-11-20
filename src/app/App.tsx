import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    RouteComponentProps,
    Switch,
    useHistory,
    withRouter
} from 'react-router-dom';
import Home from '../features/Home/Home';
import About from '../features/About';
import Topics from '../features/Topics/Topics';

import { BarsIcon } from 'react-line-awesome';

import './App.css';
import GlobalStyles from '../styles/Global';

const App: React.FC<RouteComponentProps> = () => {
    const [menu_state, setMenuState] = useState('');

    const toggleMenuState = () => {
        setMenuState(menu_state === 'open' ? '' : 'open');
    };

    return (
        <Router>
            <div className={'toolbar'}>
                <div className={`navigation ${menu_state}`}>
                    <ul className={'navigation-list'}>
                        <li className={'navigation-link right responsive'} onClick={() => toggleMenuState()}>
                            <BarsIcon className={'menu-icon'}/>
                        </li>
                        <li className={'navigation-link'}>
                            <NavLink exact={true} activeClassName='is-active' to="/">Home</NavLink>
                        </li>
                        <li className={'navigation-link'}>
                            <NavLink activeClassName='is-active' to="/about">About</NavLink>
                        </li>
                        <li className={'navigation-link'}>
                            <NavLink activeClassName='is-active' to="/topics">Topics</NavLink>
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
                <GlobalStyles/>
            </div>
        </Router>
    );
};

export default withRouter(App);
