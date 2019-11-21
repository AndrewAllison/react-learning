import React from 'react';

class Clock extends React.Component<any, any> {
    timerID:any;

    constructor(props: any) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount(): void {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    
    componentWillUnmount(): void {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;
