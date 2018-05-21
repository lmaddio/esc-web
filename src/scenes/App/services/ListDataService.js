import React, { Component } from 'react';
import { connect } from "react-redux";
import {requestListData} from '../../../redux/actions';
import Loader from "../../../components/Loader/Loader";

class ListDataService extends Component {
  componentDidMount() {
    this.props.getListData();
  }
  render() {
    const {listData, children} = this.props;
    const {checkIn, error, data} = listData;
    let component = <Loader/>;
    if(!checkIn && error) 
      component = React.cloneElement(children, {error});
    else if(!checkIn && data)
      component = React.cloneElement(children, {...data});
    return (<div>{component}</div>);
  }
}

const mapStateToProps = ({setListDataRed}) => {
  return {
    listData: setListDataRed
  }
};

export default connect(
  mapStateToProps,
  requestListData
)(ListDataService);