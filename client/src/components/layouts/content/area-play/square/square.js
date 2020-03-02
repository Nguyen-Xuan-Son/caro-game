import React, { Component } from 'react';

import './square.css';
import { sendCoordinatesUse } from '../../../../../socket.io';

class Square extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showType: '',
			showTypeO: 'O',
			showTypeX: 'X'
		};

		this.handleTicSquare = this.handleTicSquare.bind(this);
	}

	handleTicSquare() {
		this.setState({
			showType: this.state.showTypeO
		}, () => {
			sendCoordinatesUse({
					coordinates: this.props.coordinates,
					showType: this.state.showType
				}
			);
		});
	}

  	render() {
    	return (
      		<div className="square-item"
				onClick={this.handleTicSquare}
			>
				{this.props.ticType}
      		</div>
    	);
  	}
}

export default Square;
