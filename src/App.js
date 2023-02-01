import './CSS/App.css';
import Home from './Pages/Home'
import WorldData from './WdataComponents/ContextandReducer'
import  {HashRouter as Router, Switch,Route } from 'react-router-dom';
import Login from './LoginComponents/Login'
import USAData from './USADataComponents/USAData'
import ContactUs from './Pages/Contact';


function App() {

  return (
<div className="App">
    <Router> 
  
          <Switch>
                <Route path="/"  exact component={Login} />
                <Route path="/Login"  exact component={Login} />
                <Route path="/Home"   component={Home} />
                <Route path="/WorldData" component={WorldData} />
                <Route path="/USAData" component={USAData} />
                <Route path="/ContactUs" component={ContactUs} />

          </Switch>

    </Router>
    {/* <Login/> */}
</div>


  );
}

export default App;
