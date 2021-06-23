import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Header from "./Screens/header";
import Footer from "./Screens/footer";
import MarketList from "./Screens/HomeScreen";
import Register from "./Screens/registerScreen";
import Login from "./Screens/loginScreen";

function App() {
  return (
    <div className="App">           
      <Router>      
        <Header/> 
        <Route path="/" exact component={MarketList} />  
        <Route path="/register" exact component={Register} />    
        <Route path="/login" exact component={Login} />            
        <Footer/>

    </Router>

      
    
    </div>
  );
}

export default App;
