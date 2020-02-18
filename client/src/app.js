import React from 'react';
import { subscribeToTimer } from './services/socket-io';
import Layouts from './components/layouts';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			timestamp: null
		};

		subscribeToTimer((err, timestamp) => {
			this.setState({
				timestamp
			});
		});
	}

	componentDidMount() {
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
