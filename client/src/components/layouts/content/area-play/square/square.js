import React, { Component } from 'react';

import './square.css';

class Square extends Component {

	constructor(props) {
		super(props);

		this.state = {};

		this.handleTicSquare = this.handleTicSquare.bind(this);
	}

	handleTicSquare() {
	}

  	render() {
    	return (
      		<div className="square-item"
				onClick={this.handleTicSquare}
			>
                O
      		</div>
    	);
  	}
}

export default Square;
