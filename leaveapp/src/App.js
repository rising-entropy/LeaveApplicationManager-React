import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage'

class App extends Component{

  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;