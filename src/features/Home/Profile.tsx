import React from 'react';
import Avatar from './Avatar';

const Profile: React.FC<any> = (props) => {
    const { user } = props;
    console.log(user);

    return (
        <div>
            <h1>User Profile</h1>
            <Avatar user={user}/>
        </div>
    );
};

export default Profile;
