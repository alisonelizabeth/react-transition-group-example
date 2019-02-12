import React, { Component } from 'react';
import { Button } from 'carbon-components-react';
import Notification from './Notification';
import './App.css';

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
      () => setTimeout(() => this.setState({ notification: false }), 5000)
    );
  }
  render() {
    const { notification } = this.state;
    return (
      <div className='app'>
        <Notification notification={notification} />
        <div className='app-content'>
          <h1>React Transition Group Example</h1>
          <Button onClick={() => this.showNotification()}>
            Trigger alert
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
