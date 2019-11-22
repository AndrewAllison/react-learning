import React from 'react';

class Clock extends React.Component<any, any> {
    timerID: any;

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

    iClicked = (id: number) => {
        console.log('This is:', this, id)
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <button onClick={this.iClicked.bind(this, 12)}>Click Me</button>
                <h2> It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;
