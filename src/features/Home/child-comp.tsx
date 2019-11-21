import React  from 'react';
import Profile from './Profile';
import Clock from './Clock';
import ReactDOM from 'react-dom';

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
            <Clock />
        </div>
    )

   //  function tick() {
   //      ReactDOM.render(
   //          {/*<Clock date={new Date()}/>,*/}
   //          document.getElementById('root')
   //      )
   //  }
   // setInterval(tick, 1000);
};

export default ChildComp;

