import React, { Component } from 'react';
import 'carbon-components/scss/globals/scss/styles.scss';
import { Button } from 'carbon-components-react';
import Notification from './Notification';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notification: false
    };
  }
  showNotification() {
    this.setState(
      { notification: true },
      () => setTimeout(() => this.closeNotification(), 5000)
    );
  }
  closeNotification() {
    this.setState({ notification: false });
  }
  render() {
    const { notification } = this.state;
    return (
      <div className='app'>
        <Notification notification={notification} closeNotification={this.closeNotification.bind(this)} />
        <div className='app-content'>
          <h1>React Transitions Group Example</h1>
          <Button onClick={() => this.showNotification()}>
            Trigger alert
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
