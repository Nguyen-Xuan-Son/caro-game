import React, { Component } from 'react';

import Board from './board/board.js'
import ChooseAquareNumber from './choose-aquare-number';

class AreaPlay extends Component {

	constructor(props) {
		super(props);

		this.state = {};

        this.handleAquareNumberChessboard = this.handleAquareNumberChessboard.bind(this);
	}

    handleAquareNumberChessboard(e) {
        this.setState({...e});
    }

  	render() {
    	return (
      		<React.Fragment>
                <ChooseAquareNumber setUpAquareNumber={this.handleAquareNumberChessboard}/>
                <Board chessBoardSize={this.state}/>
      		</React.Fragment>
    	);
  	}
}

export default AreaPlay;
