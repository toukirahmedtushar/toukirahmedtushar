import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{color:'red', backgroundColor:'green'}}>hello</div>
      <Car />
    </div>
  );
}
class Car extends React.Component {
  render() {
    return (
    <div>
      <h2>Hi, I am a Car! </h2>
    <Car2 />
    </div>
    );
  }
}
class Car2 extends React.Component {
  render() {
    return <h2>Hi, I am a Car2222222!</h2>;
  }
}





export default App;

