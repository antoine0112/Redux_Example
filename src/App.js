import React, { Component } from 'react';
import {Provider} from "react-redux"
import Store from "../src/store/my_store"
import MyComponent from "./my_component"
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={Store}>
        <MyComponent></MyComponent>
        </Provider>
    );
  }
}

export default App;
