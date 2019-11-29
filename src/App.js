import React from 'react';
import './App.css';
import Demo from './demo';
import { Button } from 'antd';
import Compostion from './components/Compostion';
import HooksTest from './components/HooksTest';

class App extends React.Component {
  state = {
    count: 0
  };
  componentDidMount() {
    this.setState({ count: this.state.count + 1 });
    setTimeout(() => {
      this.setState({
        count: ""
      })
    }, 2000);
  }
  render() {
    return (
      <div className="App">
        <Button type="primary">按钮</Button>
        <Compostion></Compostion>
        <HooksTest></HooksTest>
        <header className="App-header">
          {this.state.count && <Demo prop={this.state.count} />}
        </header>
      </div>
    );
  }
}

export default App;
