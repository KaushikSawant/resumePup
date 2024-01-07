import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Api from './Api';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
    return (
            <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/Api" component={Api} />
                <Route path="/Register" component={Register} />
                <Route path="/home" component={Home} />
            </Switch>
            </Router>
  );
}

export default App;
