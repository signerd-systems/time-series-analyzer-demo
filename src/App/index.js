import React, { Component } from "react";
import "./style.css";
import {TimeSeriesAnalyzer} from 'time-series-analyzer-webapp';

class App extends Component {
  render() {
    return <div className="App"><TimeSeriesAnalyzer/></div>;
  }
}

export default App;
