import React, { Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import AddTutorial from './components/AddTutorial';
import Edit from './components/EditTutorial';
import TutorialList from './components/TutorialList';


class App extends Component{
 constructor(props){
   super(props);
    this.state={}

   
 }
 render(){
   return(
     
    <Router>
      <Navbar/>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={TutorialList}/>
          <Route  exact path="/add" component={AddTutorial}/>
          <Route exact path="/tutorial/:id" component={Edit}/>
          
        </Switch>

      </div>
      

    </Router>
   )
 }
}

export default App;
