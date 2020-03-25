import React, { useState, useEffect } from 'react';
import DataFetching from './Datafetching';
import Crud from './Crud';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{
  render(){
    return (
      <div >
        
        <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              
                <li className="nav-item">
                  <Link className="nav-link" to="/basic">Basic</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/crud">Crud</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/fakeapi">Fake api</Link>
                </li>
              </ul>
            </div>
            </div>
          </nav>
          
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <div className="container mt-5">
            <Switch>
              <Route path="/basic">
                <Basic/>
              </Route>
              <Route path="/fakeapi">
                <DataFetching/>
              </Route>
              <Route path="/crud">
                <Crud/>
              </Route>
            </Switch>
          </div>
          
        </div>
      </Router>
      </div>
    );
  }
}

function Basic() {
  const initialState = 0;
  const [count,stateCount] = useState(initialState)
  const [name,setName] = useState({firstName:'',lastName:''})
  useEffect(()=>{
    document.title = `You clicked ${count} times`
  },[count])
  const plusFive = ()=>{
    for(var i=0;i<5;i++){
      stateCount(prevcount => prevcount + 1)
    }
  }
  return(
    <div>
      <p>You clicked {count} times</p>
        <button onClick={()=>stateCount(initialState)}>reset</button>
        <button onClick={()=>stateCount(count+1)}>Increment</button>
        <button onClick={()=>stateCount(count-1)}>Decrement</button>
        <button onClick={plusFive}>Plus 5</button>
        <div>
          <input type="text" placeholder="Firstname" onChange={e => setName({...name,firstName:e.target.value})} />
          <input type="text" placeholder="Lastname" onChange={e => setName({...name,lastName:e.target.value})}/>
          <p>First name is {name.firstName}</p>
          <p>Last name is {name.lastName}</p>
        </div>
    </div>
  )
}

export default App;
