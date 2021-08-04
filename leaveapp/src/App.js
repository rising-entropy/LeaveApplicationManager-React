import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage'
import ApplicationsPage from "./components/ApplicationsPage/ApplicationsPage";
import store from './store/index'
import SignUpPage from "./components/SignUpPage/SignUpPage";
import AdminPage from './components/AdminPage/AdminPage'

class App extends Component{

  constructor()
  {
    super()
    try{
      if(localStorage.getItem('username').length > 0)
      {
        store.dispatch({ type: "authLogin" });
      }
    }
    catch{}
  }

  theAuth = false

  componentDidMount(){
    const state = store.getState()['auth']['isAuth']
    this.theAuth = state
  }

  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={localStorage.getItem('username') && localStorage.getItem('username').length > 0 ? ApplicationsPage : LoginPage}></Route>
          <Route exact path="/applications" component={ApplicationsPage}></Route>
          <Route exact path="/admin" component={AdminPage}></Route>
          {localStorage.getItem('username') && localStorage.getItem('username').length > 0 ? null : <Route exact path="/signup" component={SignUpPage}></Route>}
        </Switch>
      </Router>
    )
  }
}

export default App;