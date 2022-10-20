import './App.css';
import Header from './components/header/Header';
import {  BrowserRouter as Router,  Switch,Route} from "react-router-dom";
import Pages from './screens/Pages';
import LoginForm from './components/header/loginform.jsx';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
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
