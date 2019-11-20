import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './app/layout/scrollToTop';
import { Route, Router } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import '../node_modules/milligram/dist/milligram.css';

export const history = createBrowserHistory();

history.listen((location) => {
    console.log(location);
});

ReactDOM.render(
    <Router history={history}>
        {/*uses https://github.com/pbeshai/use-query-params*/}
        <QueryParamProvider ReactRouterRoute={Route}>
            <ScrollToTop>
                <App/>
            </ScrollToTop>
        </QueryParamProvider>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
