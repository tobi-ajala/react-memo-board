import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import MemoInput from './components/memoInput';
import MemoItem from './components/memoItem';
import './components/memo.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memos: [
        {
          id: 0,
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
        },
        {
          id: 1,
          value: "Fold the laundry.",
          description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
        },
        {
          id: 2,
          value: "Learn to make a React app!",
          description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
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
          <div className="memo-tiles">
            {
              this.state.memos.map((memo) => {
                return <MemoItem memo={memo} key={memo.id} id={memo.id} removeMemo={this.removeMemo}/>
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
