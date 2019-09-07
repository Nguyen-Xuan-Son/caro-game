import React, { Component } from 'react';
import Aquare from './../aquare/aquare.js';

import './board.css';

class Board extends Component {

	constructor(props) {
		super(props);
		this.handleChessBoardSize = this.handleChessBoardSize.bind(this);
	}

	handleChessBoardSize() {
		const {chessBoardSize} = this.props;
		const arrTempParent = [];

		const executeChessBoardSize = (height, width) => {
			for (let i = 0; i < height; i++) {
				let arrTempChildren = [];

				for (let j = 0; j < width; j++) {
					arrTempChildren.push(<Aquare key={j}/>);
				}

				arrTempParent.push(
					<div className="square-line-item" key={i}>
				 		{arrTempChildren}
				 	</div>
				);
			}
		}

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
