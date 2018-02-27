import * as React from 'react';
import './App.css';
import Hello from './views/Hello';

class App extends React.Component {
  render() {
    var test = {
      create : function(config){
        console.log(config);
      }
    }
    return (
      <div className="App">
       <Hello  name="asad" levelantusias={1}/>
      </div>
    );
  }
}

export default App;
