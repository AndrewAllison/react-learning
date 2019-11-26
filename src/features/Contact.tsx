import React, { SyntheticEvent } from 'react';

class Contact extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { value: '', essay: 'A nice essay about the DOm', flavour: '', categories: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleEssayChange = this.handleEssayChange.bind(this);
        this.handleFlavourChange = this.handleFlavourChange.bind(this);
        this.handleCategoriesChange = this.handleCategoriesChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({ value: event.target.value });
    }

    handleEssayChange(event: any) {
        this.setState({ essay: event.target.value });
    }

    handleFlavourChange(event: any) {
        this.setState({ flavour: event.target.value });
    }

    handleCategoriesChange(event: any) {
        const value = [...event.target.options].filter(o => o.selected).map(o => o.value);
        this.setState({ categories: value });
    }

    handleSubmit(event: SyntheticEvent) {
        alert('A name was submitted: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label>
                    Essay:
                    <textarea value={this.state.essay} onChange={this.handleEssayChange}/>
                </label>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.flavour} onChange={this.handleFlavourChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    <select multiple={true} value={this.state.categories} onChange={this.handleCategoriesChange}>
                        <option value="1">JavaScript</option>
                        <option value="2">C#</option>
                        <option value="3">Ts</option>
                        <option value="4">HTML</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Contact;
