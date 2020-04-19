import React, { Component } from 'react';

import './style.css';
import {receivedMessageUse, sendMessageUse} from '../../../socket.io';

class ChatAllRight extends Component {

	constructor(props) {
		super(props);

		this.state = {
			messages: [],
			message: ''
		};
		this.sendMessage = this.sendMessage.bind(this);
		this.handleText = this.handleText.bind(this);
		this.handleShowMessage = this.handleShowMessage.bind(this);
	}

	componentDidMount() {
		receivedMessageUse(message => {
			const messages = this.state.messages;
			messages.push(message);
			this.setState({
				messages
			});
		})
	}

	sendMessage() {
		const messages = this.state.messages;
		sendMessageUse(this.state.message);
		this.setState({
			messages,
			message: ''
		});
	}

	handleText(e) {
		this.setState({
			message: e.target.value
		});
	}

	handleShowMessage() {
		return this.state.messages.map((message, index) => {
			return (
				<div className="message-item"
					key={index}>
					<div>Nguyen Thi Mai: </div>
					<div>{message}</div>
				</div>
			)
		});
	}

  	render() {
    	return (
      		<>
				<div className="container-chat-area">
					<div className="content-container">{this.handleShowMessage()}</div>
					<div className="action-container">
						<div>
							<label htmlFor="enter_text_field">Typing: </label>
							<input id="enter_text_field"
								   name="message"
								   value={this.state.message}
								   onChange={this.handleText}
								   type="text" />
						</div>
						<div>
							<button type="button"
									disabled={!this.state.message}
									onClick={this.sendMessage}
									>Send</button>
						</div>
					</div>
				</div>
      		</>
    	);
  	}
}

export default ChatAllRight;
