import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'


function App(props) {

  let handlechange= (e)=>{
    props.b()
  }
  return (
    <div className="App" >
      {props.myStore}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={(e)=>{handlechange(e)}}>clickme</button>
      </header>
    </div>
  );
}

let mapStateToProps = (state) => { // state == store object

  return { myStore:state};
}
let mapDispatchToProps = (dispatch) => {
 return {
  a:function(){dispatch({type:'abc', payload:'ANKIT'})},
  b:()=>{dispatch({type:'xyz',payload:"NAJAFGARH"})}
 }

}


export default connect(mapStateToProps, mapDispatchToProps)(App);
