import React from 'react';

const Avatar: React.FC<any> = (props) => {
    const { user } = props;
    return (
        <img className="Avatar"
             src={user.avatarUrl}
             alt={user.name}
        />
    )
};

export default Avatar;
