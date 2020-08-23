import React, { Component } from'react';
import popup from '../../untils/popup';

class Header extends Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

  	render() {

		const component = () => {
			return (
				<div>
					<div>Popup content here !!</div>
					<button>abc change1 </button>
				</div>
			)
		};

    	return (
      		<>
      			Header
				{popup(component(), 'abc')}
      		</>
    	);
  	}
}

export default Header;
