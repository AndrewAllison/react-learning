import React from 'react';
import Profile from './Profile';

const ChildComp: React.FC<any> = (props) => {
    console.log(props);
    const src = 'https://api.adorable.io/avatars/285/abott@adorable.png';
    const { name } = props;
    const user = {
        name,
        avatarUrl: src
    };
    return (
        <div>
            <Profile user={user}/>
        </div>
    )
};

export default ChildComp;
