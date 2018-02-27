import * as React from 'react';
import './App.css';
import Hello from './views/Hello';

class App extends React.Component {
  render() {
    
    return (
      <div className="App">
       <Hello  name="asad" levelantusias={1}/>
      </div>
    );
  }
}

export default App;
