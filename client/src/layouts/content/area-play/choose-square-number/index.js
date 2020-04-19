import React from 'react';

class ChooseSquareNumber extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
            height: '',
            width: ''
        };

        this.handleInputHeight = this.handleInput.bind(this, 'height');
        this.handleInputWidth = this.handleInput.bind(this, 'width');
        this.resetSquareNumber = this.resetSquareNumber.bind(this);
        this.setUpSquareNumber = this.setUpSquareNumber.bind(this);
        this.setFullScreen = this.setFullScreen.bind(this);
	}

    handleInput(refName, {target}) {
        this.setState({
            [target.name]: target.value
        });
    }

    setUpSquareNumber() {
        this.props.setUpSquareNumber(this.state);
    }

    resetSquareNumber() {
        this.setState({
            height: '',
            width: ''
        },() => {
            this.props.setUpSquareNumber(this.state);
        });
    }

    setFullScreen() {
        this.setState({
            height: 40,
            width: 40
        },() => {
            this.props.setUpSquareNumber(this.state);
        });
    }

  	render() {
    	return (
      		<div>
                <div>Choose Square number</div>
                <div>
                    <div>Height</div>
                    <div>
                        <input  type="text"
                                value={this.state.height}
                                onChange={this.handleInputHeight}
                                placeholder="Press number character"
                                name="height"
                                ref="height"/>
                    </div>
                </div>
                <div>
                    <div>Width</div>
                    <div>
                        <input  type="text"
                                value={this.state.width}
                                onChange={this.handleInputWidth}
                                placeholder="Press number character"
                                name="width"
                                ref="width"/>
                    </div>
                </div>
                <div>
                    <button type="button" onClick={this.setFullScreen}>Full screen</button>
                    <button type="button" onClick={this.setUpSquareNumber}>Setup</button>
                    <button type="button" onClick={this.resetSquareNumber}>Reset</button>
                </div>
      		</div>
    	);
  	}
}

export default ChooseSquareNumber;
