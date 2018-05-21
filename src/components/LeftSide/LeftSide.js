import React from 'react';
import {connect} from "react-redux";
// REDUX
import {selectAction} from "../../redux/actions";
// COMPONENTS
import ListItems from "../ListItems/ListItems";
// STYLES
import "./LeftSide.css";

const ErrorMsg = ({msg})=>(
  <div className="errorMsg">
    <p>{msg}</p>
  </div>
);

const LeftSide = ({error, items, total, actions, selects})=> (
  <div className="LeftSide">
    <div>
      {error ?
        <ErrorMsg msg={"No se han podido pedir datos."}/>
        :
        <div>
          {
            items && items.length === 0 ?
              <ErrorMsg msg="No hay datos, intente nuevamente mas tarde"/>
            :
              <div className="list">
                {items.map(d=>(
                  <ListItems 
                    key={d.id} 
                    {...d} 
                    selected={selects.some(s=>s.id===d.id)}
                    {...actions} />
                ))}
              </div>
          }
        </div>
      }
    </div>
  </div>
);


const mapStateToProps = ({selectedItemsRed}) => {
  const {selecteds=[]} = selectedItemsRed;
  return {
    selects: selecteds.map(s=>s) 
  }
};

export default connect(mapStateToProps, selectAction)(LeftSide);