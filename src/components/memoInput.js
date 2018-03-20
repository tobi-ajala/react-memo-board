import React from 'react';
import './memo.css';

export default class MemoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.addMemo = this.addMemo.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
    console.log(e.target.name);
  }

  addMemo() {
    // Ensure a memo was actually entered before submitting
    if (this.state.value.length > 0 && this.state.description.length > 0) {
      this.props.addMemo(this.state);
      this.setState({value: '', description: ''});
    }
  }

  render() {
    return (
      <div className="add-memo">
        <p>description</p>
        <br />
        <input type="text" name="value" value={this.state.value} onChange={this.handleChange} />
        <br />
        <br />
        <p>description</p>
        <br />
        <textarea type="text" name="description" rows="10" value={this.state.description} onChange={this.handleChange} />
        <br />
        <br />
        <button className="add" onClick={() => this.addMemo()}>Submit</button>
      </div>
    );
  }
}
