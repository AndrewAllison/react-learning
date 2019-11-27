import React from 'react';

interface Scale {
    c: string;
    f: string;
}

const scaleNames: Scale = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: any) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {
                    // @ts-ignore
                    scaleNames[ scale ]}
                    :
                </legend>
                <input value={temperature}
                       onChange={this.handleChange}/>
            </fieldset>
        );
    }
}

export default TemperatureInput;
