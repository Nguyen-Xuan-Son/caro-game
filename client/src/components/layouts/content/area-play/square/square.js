import React, { Component } from 'react';

import './square.css';
import {sendCoordinatesUse} from '../../../../../socket.io';

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
		}, () => {
			sendCoordinatesUse(this.props.coordinates);
		});
	}

	showTicContent(isShowTic, isShowTicO) {
		return isShowTic ? isShowTicO ? 'O' : 'X' : '';
	}

  	render() {

    	return (
      		<div className="square-item"
				onClick={this.handleTicSquare}
			>
				{this.showTicContent(this.state.isShowTic || this.props.coordinatesSelected, this.state.isShowTicO)}
      		</div>
    	);
  	}
}

export default Square;
