import React from 'react';
import ChildComp from './child-comp';

function UserGreeting(props: any) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props: any) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props: any) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

function LoginButton(props: any) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props: any) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

function Mailbox(props: any) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
			<h2>
				You have {unreadMessages.length} unread messages.
			</h2>
            }
        </div>
    );
}

const messages: any[] = ['aa'];

function WarningBanner(props: any) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.state = { isLoggedIn: false, showWarning: true };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    handleToggleClick() {
        this.setState((state: any) => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }
        return (
            <div>
                <h2>Home</h2>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
                {button}
                <Mailbox unreadMessages={messages}/>
                <Greeting isLoggedIn={isLoggedIn}/>
                <ChildComp name={'Andy'}/>
            </div>
        )
    };
};

export default Home;
