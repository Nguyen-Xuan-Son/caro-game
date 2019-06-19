import React, { Component } from 'react';

import './aquare.css';

class Aquare extends Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

  	render() {
    	return (
      		<div className="square-item" onClick={() => {console.log(1)}}>
      			1
      		</div>
    	);
  	}
}

export default Aquare;