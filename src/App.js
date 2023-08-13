/*import logo from './logo.svg';*/

import './App.css';
import React,{ useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
setAlert({
  msg: message,
  type: type}

)
setTimeout(()=>
setAlert(null),
1500);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
    setMode('dark')
    document.body.style.backgroundColor='#2e489a'
    showAlert("Dark mode has been enabled","success")
  }
  else
  {
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been enabled","success")
  }
}
  return (
    <>
    <Router>
  <Navbar title="TextUtils" home="Home" aboutText="About" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Try TextUtils-Word counter,character counter,remove extra spaces" mode={mode} />
          </Route>
      </Switch> 
  </div>
  </Router>
    </>
  );

}

export default App;
