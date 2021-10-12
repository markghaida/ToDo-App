import { Component } from 'react';
import Counter from './components/counter/Counter';
import './App.css';
import ToDoApp from './components/todo/ToDoApp';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        <ToDoApp/>
      </div>
    );
  }
}

export default App; 