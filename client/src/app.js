import React from 'react';
import Layouts from './components/layouts';
import {userConnectUse, statusPeopleUse} from './socket.io';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			timestamp: null
		};
	}

	componentDidMount() {
		userConnectUse(null);
		statusPeopleUse();
	}

	render() {
    	return (
	      	<React.Fragment>
		        <Layouts />
	      	</React.Fragment>
    	);
  	}
}

export default App;
