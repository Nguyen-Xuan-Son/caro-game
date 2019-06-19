import React, { Component } from 'react';
import Aquare from './../aquare/aquare.js';

import './board.css';

class Board extends Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

  	render() {
    	return (
	      	<div>
	      		<div>Caro game</div>
	      		<div className="square-container">
	      			<div className="container">
	      				<Aquare />
	      				<Aquare />
	      				<Aquare />
	      			</div>
	      			<div className="container">
	      				<Aquare />
	      				<Aquare />
	      				<Aquare />
	      			</div>
	      			<div className="container">
	      				<Aquare />
	      				<Aquare />
	      				<Aquare />
	      			</div>
	      		</div>
	      	</div>
    	);
  	}
}

export default Board;