import React from 'react';

export default class MemoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.memoMemo};

    this.handleChange = this.handleChange.bind(this);
    this.addMemo = this.addMemo.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addMemo(memo) {
    // Ensure a memo was actually entered before submitting
    if (memo.length > 0) {
      this.props.addMemo(memo);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="add" onClick={() => this.addMemo(this.state.value)}>Submit</button>
      </div>
    );
  }
}
