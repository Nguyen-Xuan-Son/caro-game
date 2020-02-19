import React from 'react';

import Board from './board/board.js'
import ChooseAquareNumber from './choose-aquare-number';
import {setSizeBoard} from '../../../../socket.io';

class AreaPlay extends React.Component {

	constructor(props) {
		super(props);

		this.state = {};

        this.handleAquareNumberChessboard = this.handleAquareNumberChessboard.bind(this);
	}

    handleAquareNumberChessboard(e) {
		this.setState({...e}, () => {
			setSizeBoard(this.state);
		});
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
