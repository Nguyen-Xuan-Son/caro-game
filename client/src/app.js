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
			console.log("err", err);
			console.log("timestamp", timestamp);
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
				<p className="App-intro">
					This is the timer value: {this.state.timestamp}
				</p>
		        <Layouts />
	      	</React.Fragment>
    	);
  	}
}

export default App;
