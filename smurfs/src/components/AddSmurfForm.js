import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class AddSmurfForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handleClick = e => {
        e.preventDefault();
        if (!this.state.name || !this.state.age || !this.state.height) return;
        this.props.addSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: ''
        })
        this.props.history.push('/smurfs')
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form className="add-smurf-form">
                <h2>Add a Smurf</h2>
                <input
                    placeholder="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInput}
                />
                <input
                    placeholder="age"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleInput}
                />
                <input
                    placeholder="height"
                    name="height"
                    value={this.state.height}
                    onChange={this.handleInput}
                />
                <button onClick={this.handleClick}>+</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { addSmurf })(AddSmurfForm);