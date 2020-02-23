import React from 'react';

import Board from './board/board.js'
import ChooseSquareNumber from './choose-square-number';
import {setSizeBoardUse} from '../../../../socket.io';

class AreaPlay extends React.Component {

	constructor(props) {
		super(props);

		this.state = {};

        this.handleSquareNumberChessboard = this.handleSquareNumberChessboard.bind(this);
	}

    handleSquareNumberChessboard(e) {
		this.setState({...e}, () => {
			setSizeBoardUse(this.state);
		});
    }

  	render() {
    	return (
      		<React.Fragment>
                <ChooseSquareNumber setUpSquareNumber={this.handleSquareNumberChessboard}/>
                <Board chessBoardSize={this.state}/>
      		</React.Fragment>
    	);
  	}
}

export default AreaPlay;
