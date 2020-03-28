import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from './Form'

import List from './List'

import './style.css';

class App extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }
    returnList() {
        if (localStorage.getItem('transactions') == null)
            localStorage.setItem('transactions', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('transactions'))
    }

  render() {
    return (
      <div>
         
          <Form
                    currentIndex={this.state.currentIndex}
                    list={this.state.list}
                    onAddOrEdit={this.onAddOrEdit}
                />
                <List />
         
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
