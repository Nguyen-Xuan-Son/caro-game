import React, { Component } from 'react';

import './square.css';

class Square extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isShowTicO : true,
			isShowTic: false
		};

		this.handleTicSquare = this.handleTicSquare.bind(this);
		this.showTicContent = this.showTicContent.bind(this);
	}

	handleTicSquare() {
		this.setState({
			isShowTic: true,
			isShowTicO: !this.state.isShowTicO
		});
	}

	showTicContent() {
		return this.state.isShowTic ? this.state.isShowTicO ? 'O' : 'X' : '';
	}

  	render() {
    	return (
      		<div className="square-item"
				onClick={this.handleTicSquare}
			>
				{this.showTicContent()}
      		</div>
    	);
  	}
}

export default Square;
