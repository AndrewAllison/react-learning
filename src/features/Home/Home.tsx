import React from 'react';
import ChildComp from './child-comp';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <ChildComp name={'Andy'}/>
        </div>
    );
};

export default Home;
