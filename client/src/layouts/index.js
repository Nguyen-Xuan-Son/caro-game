import React, { Component } from 'react';

import './style.css';

import Header from './header';
import TimeLine from './content/time-line-people-left';
import AreaPlay from './content/area-play';
import ChatAll from './content/chat-all-right';
import Footer from './footer';

class Layouts extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="header">
                        <Header />
                    </div>
                    <div className="content">
                        <div>
                            <TimeLine />
                        </div>
                        <div>
                            <AreaPlay />
                        </div>
                        <div>
                            <ChatAll />
                        </div>
                    </div>
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Layouts;
