import React, { Component } from "react";
import "./style.css";
import {TimeSeriesAnalyzer, TimeSeriesAnalyzerTutorial} from 'time-series-analyzer-webapp';
import {NavLink, Switch, Route} from 'react-router-dom';

const RenderTimeSeriesAnalyzer = () => (
  <TimeSeriesAnalyzer/>
);

const RenderTimeSeriesAnalyzerTutorial = () => (
  <TimeSeriesAnalyzerTutorial/>
)

export const App = () => (
  <div className="App">
    <NavLink exact activeClassName="current" to='/time-series-analyzer/application'><span className="app-button">application</span></NavLink>
    <NavLink exact activeClassName="current" to='/time-series-analyzer/tutorial'><span className="app-button">tutorial</span></NavLink>
    <Switch>
      <Route exact path="/time-series-analyzer/application" component={RenderTimeSeriesAnalyzer}></Route>
      <Route exact path="/time-series-analyzer/tutorial" component={RenderTimeSeriesAnalyzerTutorial}></Route>
    </Switch>
  </div>
)

export default App;
