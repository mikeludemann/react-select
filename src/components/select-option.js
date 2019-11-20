import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectContainer extends Component {
	render() {
		return (
			<form onSubmit={() => this.props.handleSubmit}>
				{this.props.children}
			</form>
		);
	}
}

SelectContainer.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
}

// ##################################################

class SelectGroup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
		console.log(event.target.value);
	}

	render() {
		return (
			<select value={this.state.value} onChange={this.handleChange}>
				{this.props.children}
			</select>
		);
	}
}

SelectGroup.propTypes = {
	children: PropTypes.node.isRequired
}

// ##################################################

class OptionElement extends Component {
	render() {
		return (
			<option value={this.props.value}>{this.props.value}</option>
		);
	}
}

OptionElement.propTypes = {
	value: PropTypes.string.isRequired
}

// ##################################################

class SelectSubmit extends Component {
	render() {
		return (
			<button type="submit" className="submit-button">{this.props.name}</button>
		);
	}
}

SelectSubmit.propTypes = {
	name: PropTypes.string.isRequired
}

// ##################################################

export {
	SelectContainer,
	SelectGroup,
	OptionElement,
	SelectSubmit
}
