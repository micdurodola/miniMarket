import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Header from "./Screens/header";
import Footer from "./Screens/footer";
import MarketList from "./Screens/HomeScreen";
import Register from "./Screens/registerScreen";
import Login from "./Screens/loginScreen";
import Dashboard from "./Screens/dashboardScreen";

function App() {
  return (
    <div className="App">           
      <Router>      
        <Header/> 
        <Route path="/" exact component={MarketList} />  
        <Route path="/register" exact component={Register} />    
        <Route path="/login" exact component={Login} />   
        <Route path="/dashboard" exact component={Dashboard} />           
        <Footer/>

    </Router>

      
    
    </div>
  );
}

export default App;
