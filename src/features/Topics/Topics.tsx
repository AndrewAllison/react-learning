import { Route, RouteComponentProps, Switch, useRouteMatch, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import React, { SyntheticEvent, useState } from 'react';
import Topic from './Topic';
import { NumberParam, useQueryParam } from 'use-query-params';
import { StringParam } from 'use-query-params/lib/params';

const Topics: React.FC<RouteComponentProps> = () => {
    let match = useRouteMatch();
    // Used to deal with query parameters
    const [currentPage, setNum] = useQueryParam('page', NumberParam);
    const [searchTerm, setSearch] = useQueryParam('q', StringParam);

    // State within the component
    const [count, setCount] = useState(0);

    // trying to proxy the query count so it's not a zero index.
    let newPage = currentPage || 0;

    const handleSubmit = (event: SyntheticEvent) => {
        console.log('SUBMITTING', searchTerm);
        event.preventDefault();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        event.preventDefault();
    };

    return (
        <div>
            <h2>Topics</h2>
            <h1>Current Page {currentPage}</h1>
            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>

            <button disabled={newPage <= 1} onClick={() => setNum(newPage - 1)}>Back Page</button>
            <button onClick={() => setNum(newPage + 1)}>Next Page</button>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <form name="searchForm" onSubmit={(event) => handleSubmit(event)}>
                <label>
                    Search:
                    <input type="text" name="search" onChange={(event) => handleChange(event)}/>
                </label>
            </form>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic/>
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
};

export default withRouter(Topics);
