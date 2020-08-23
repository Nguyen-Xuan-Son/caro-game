import React from 'react';
import Layouts from './layouts';
import {userConnectUse, statusPeopleUse} from './socket.io';
import {NotificationContainer} from 'react-notifications';

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
				<NotificationContainer />
		        <Layouts />
	      	</React.Fragment>
    	);
  	}
}

export default App;
