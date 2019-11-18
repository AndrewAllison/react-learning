import { useParams } from 'react-router';
import React from 'react';

const Topic = () => {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
};

export default Topic;
