import React from 'react';
// STYLES
import "./ListItems.css";

const ListItems = ({author, description, status, id, select, selected})=>(
  <div className={selected ? "ListItems selected" : "ListItems"}
    onClick={(e)=>select({id, status})} > 
    <div className="image-container">
      <img src="http://via.placeholder.com/200x200" alt="test"/>
    </div>
    <div>
      <p className="subtitle">{author}</p>
      <p className="text">{description}</p>
    </div>
  </div>
);

export default ListItems;