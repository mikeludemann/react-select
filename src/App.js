import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { SelectContainer, SelectGroup, OptionElement, SelectSubmit } from './components/select-option';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render(){
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<section className="content">
          <SelectContainer
            handleSubmit={this.handleSubmit}
          >
            <SelectGroup>
              <OptionElement
                value="Meat"
              ></OptionElement>
              <OptionElement
                value="Fish"
              ></OptionElement>
              <OptionElement
                value="Chicken"
              ></OptionElement>
            </SelectGroup>
            <SelectSubmit
              name="Submit"
            ></SelectSubmit>
          </SelectContainer>
				</section>
				<footer className="App-footer">
					(c) Copyright - Mike Ludemann
				</footer>
			</div>
		);
		}
}

export default App;
