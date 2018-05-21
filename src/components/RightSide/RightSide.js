import React, {Component} from 'react';
import { connect } from "react-redux";
// COMPONENTS
import Loader from '../Loader/Loader';
// REDUX
import {sendNewStatus} from "../../redux/actions";
// STYLES
import "./RightSide.css";

const STATUS = {
  APROVED: "APROVED",
  REJECTED: "REJECTED"
};

class RightSide extends Component {
  componentDidUpdate(prevProps) {
    const {checkIn, data, error} = this.props;
    if(checkIn !== prevProps.checkIn && (error || data)) {
      setTimeout(()=>alert(!data ? "Error al actualizar" : "Estado actualizado"), 500);
    }
  }
  render(){
    const {lists, checkIn, sendNewStatus} = this.props;
    return (
    <div className="RightSide">
      <p className="text-center title">Seleccion: {lists.length} participaciones</p>
      {!checkIn ?
        <div className="buttons-container">
          <button 
            className="btn green"
            onClick={(e)=>sendNewStatus(lists, STATUS.APROVED)}
            disabled={checkIn || !lists.length}
            >Aprobar</button>
          <button 
            className="btn red"
            onClick={(e)=>sendNewStatus(lists, STATUS.REJECTED)}
            disabled={checkIn || !lists.length}
            >Rechazar</button>
        </div>
      : <Loader/>
      }
    </div>
    );
  }
}


const mapStateToProps = ({setPutState, selectedItemsRed}) => {
  const {selecteds=[]} = selectedItemsRed;
  return {
    lists: selecteds.map(s=>s),
    ...setPutState
  }
};

export default connect(
  mapStateToProps,
  sendNewStatus
)(RightSide);