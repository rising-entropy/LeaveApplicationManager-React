import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage'
import ApplicationsPage from "./components/ApplicationsPage/ApplicationsPage";

class App extends Component{

  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage}></Route>
          <Route exact path="/applications" component={ApplicationsPage}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;