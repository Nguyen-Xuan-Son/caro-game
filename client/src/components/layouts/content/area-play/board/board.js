import React, { Component } from 'react';
import Square from '../square/square.js';

import './board.css';
import { receivedCoordinatesUse } from '../../../../../socket.io';

class Board extends Component {

	constructor(props) {
		super(props);
		this.state = {
			arrCoordinates: [],
			coordinates: {
				x: null,
				y: null
			}
		};

		this.executeChessBoardSize = this.executeChessBoardSize.bind(this);
		this.handleChessBoardSize = this.handleChessBoardSize.bind(this);
	}

	componentDidMount() {
		receivedCoordinatesUse(data => {
			const arrCoordinates = this.state.arrCoordinates;
			arrCoordinates.push({
				coordinates: data.coordinates,
				ticType: data.showType
			});

			this.setState({
				arrCoordinates
			})
		});
	}

	handleChessBoardSize() {
		const {chessBoardSize} = this.props;

		if (Number(chessBoardSize.height) && Number(chessBoardSize.width)) {
			return this.executeChessBoardSize(Number(chessBoardSize.height), Number(chessBoardSize.width));
		} else {
			return this.executeChessBoardSize(10, 10);
		}
	}

	executeChessBoardSize(height, width) {
		const arrTempParent = [];
		const formatCoordinates = (x, y) => {

			for (let i = 0; i < this.state.arrCoordinates.length; i++) {
				if (x === this.state.arrCoordinates[i].coordinates.x && y === this.state.arrCoordinates[i].coordinates.y) {
					return (
						<Square ticType={this.state.arrCoordinates[i].ticType}
								coordinates={{x, y}}
								key={y}
						/>
					);
				}
			}

			return (
				<Square coordinates={{x, y}}
						key={y}
				/>
			);
		};

		for (let i = 0; i < height; i++) {
			let arrTempChildren = [];

			for (let j = 0; j < width; j++) {
				arrTempChildren.push(formatCoordinates(i, j));
			}

			arrTempParent.push(
				<div className="square-line-item" key={i}>
					{arrTempChildren}
				</div>
			);
		}

		return arrTempParent;
	};

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
