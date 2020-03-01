import React, { Component } from 'react';
import Square from '../square/square.js';

import './board.css';
import {receivedCoordinatesUse} from '../../../../../socket.io';

class Board extends Component {

	constructor(props) {
		super(props);
		this.handleChessBoardSize = this.handleChessBoardSize.bind(this);

		this.state = {
			coordinatesSelected: {
				x: null,
				y: null
			}
		};
	}

	componentDidMount() {
		receivedCoordinatesUse(coordinates => {
			this.setState({
				coordinatesSelected: coordinates
			})
		})
	}

	handleChessBoardSize() {
		const {chessBoardSize} = this.props;
		const arrTempParent = [];

		const executeChessBoardSize = (height, width) => {
			for (let i = 0; i < height; i++) {
				let arrTempChildren = [];

				for (let j = 0; j < width; j++) {

					if (i === this.state.coordinatesSelected.x && j === this.state.coordinatesSelected.y) {
						arrTempChildren.push(<Square coordinatesSelected={true} coordinates={{x: i, y: j}} key={j}/>);
					} else {
						arrTempChildren.push(<Square coordinates={{x: i, y: j}} key={j}/>);
					}
				}

				arrTempParent.push(
					<div className="square-line-item" key={i}>
				 		{arrTempChildren}
				 	</div>
				);
			}
		};

		if (Number(chessBoardSize.height) && Number(chessBoardSize.width)) {
			executeChessBoardSize(Number(chessBoardSize.height), Number(chessBoardSize.width));
		} else {
			// Set default chess board size.
			executeChessBoardSize(10, 10);
		}

		return arrTempParent;
	}

  	render() {
    	return (
	      	<div className="square-board-container">
	      		<div>Caro game</div>
	      		<div className="square-board-item">
	      			{this.handleChessBoardSize()}
	      		</div>
	      	</div>
    	);
  	}
}

export default Board;
