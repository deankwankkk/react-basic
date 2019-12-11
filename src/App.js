import React from 'react';
import './App.css';
import Demo from './demo';
import { Button } from 'antd';
import {Provider} from 'react-redux';
import Compostion from './components/Compostion';
import HooksTest from './components/HooksTest';
import ContextTest from './components/ContextTest';
import ReduxTest from './components/ReduxTest';
// import KForm from './components/KForm';
import SelfTest from './components/SelfTest';
import RouterTest from './components/RouterTest';
import store from './store/index';

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
        <ContextTest></ContextTest>
        <ReduxTest></ReduxTest>
        <RouterTest></RouterTest>
        {/* <KForm></KForm> */}
        <Provider store={store}>
          <SelfTest></SelfTest>
        </Provider>
        <header className="App-header">
          {this.state.count && <Demo prop={this.state.count} />}
        </header>
        
      </div>
    );
  }
}

export default App;
