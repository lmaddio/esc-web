import React from 'react';
import { connect } from "react-redux";

import LeftSide from '../../components/LeftSide/LeftSide';
import RightSide from '../../components/RightSide/RightSide';

import "./App.css";

import ListDataService from './services/ListDataService';

const App = ({data, error})=> (
  <div className="App">
    {data && <p className="title">Mostrando {data.total} participaciones</p>}
    <div className="container">
      <div className="container left-side">
        <ListDataService >
          <LeftSide/>
        </ListDataService>
      </div>
      <div className="container right-side">
        <RightSide/>
      </div>
    </div>
  </div>
);

const mapStateToProps = ({setListDataRed}) => {
  return {
    ...setListDataRed
  }
};

export default connect(mapStateToProps)(App);
