import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import MemoInput from './components/memoInput';
import MemoItem from './components/memoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memos: [
        {
          id: 0,
          value: "Make dinner tonight!",
          description: 'Today we will have rice and chicken for dinner'
        },
        {
          id: 1,
          value: "Fold the laundry.",
          description: "Get my stuff done"
        },
        {
          id: 2,
          value: "Learn to make a React app!",
          description: 'React with Redux'
        }
      ],
      nextId: 3
    };

    this.addMemo = this.addMemo.bind(this);
    this.removeMemo = this.removeMemo.bind(this);
  }

  addMemo(memo) {
    let memos = this.state.memos.slice();
    memos.push({id: this.state.nextId, value: memo.value, description: memo.description});
    this.setState({
      memos: memos,
      nextId: ++this.state.nextId
    });
  }

  removeMemo(id) {
    this.setState({
        memos: this.state.memos.filter((memo, index) => memo.id !== id)
      });
  }

  render() {
    return (
      <div className="App">
        <div className="memo-wrapper">
          <Header />
          <MemoInput addMemo={this.addMemo} />
          <ul>
            {
              this.state.memos.map((memo) => {
                return <MemoItem memo={memo} key={memo.id} id={memo.id} removeMemo={this.removeMemo}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
