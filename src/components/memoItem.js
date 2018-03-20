import React from 'react';
import './memo.css';


export default class MemoItem extends React.Component {

  removeMemo(id) {
    this.props.removeMemo(id);
  }

  render() {
    return (
      <div className="single-tile">
        <div className="tile title"><h2>{this.props.memo.value}</h2></div>
        <div className="tile description">{this.props.memo.description}</div>
        <div className="tile delete"><button className="removeMemo" onClick={(e)=> this.removeMemo(this.props.id) }>Delete</button></div>
      </div>
    );
  }
}
