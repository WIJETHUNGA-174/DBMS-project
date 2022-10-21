import './App.css';
import Header from './components/header/Header';
import {  BrowserRouter as Router,  Switch,Route} from "react-router-dom";
import Pages from './screens/Pages';
import LoginForm from './components/header/loginform.jsx';
import signupForm from './components/header/signupForm.jsx';

function App() {
  if (!localStorage.getItem('email')) 
  return (
    <>
    <Router>
    
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/signup" component={signupForm} />
      </Switch>
    </Router>
    </>
  );
  return (
    <div className='neww'>
      
      <Router>
        <Header /> 
        <Switch>
          <Route path='/' exact>
            <Pages />
          </Route>        
        </Switch>      
      </Router>     
    </div>
  );
}

export default App;
