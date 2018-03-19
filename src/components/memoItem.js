import React from 'react';

export default class MemoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeMemo(id) {
    this.props.removeMemo(id);
  }

  render() {
    return (
      <div className="memoWrapper">
        <button className="removeMemo" onClick={(e)=> this.removeMemo(this.props.id) }>remove</button>
        {this.props.memo.value}
        <p>{this.props.memo.description}</p>
      </div>
    );
  }
}
