import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from './components/Home/Home.jsx';
import CreateActivity from "./components/CreateActivity/CreateActivity.jsx";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Home} />
        <Route path="/activity" component={CreateActivity}/>
        <Route path="/home/:ID" component={Detail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
