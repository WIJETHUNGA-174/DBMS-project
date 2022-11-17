import './App.css';
import Header from './components/header/Header';
import {  BrowserRouter as Router,  Switch,Route} from "react-router-dom";
import Pages from './screens/Pages';
import LoginForm from './components/header/loginform.jsx';
import signupForm from './components/header/signupForm.jsx';
import Cart from './components/mainpage/cart'
import confirmOrder from './components/mainpage/conOrder';
import categoryitems from './components/mainpage/categoryItems';




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
          <Route exact path='/' component={Pages}/>
          <Route exact path='/cart' component={Cart}/>
          <Route exact path='/confirmOrder' component={confirmOrder}/>
          <Route exact path='/categoryitems' component={categoryitems}/>
                 
        </Switch>      
      </Router>     
    </div>
  );
}

export default App;
