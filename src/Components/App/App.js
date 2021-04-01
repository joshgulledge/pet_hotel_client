import './App.css';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import ManageOwners from '../ManageOwners/ManageOwners';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';


function App() {
  // use dispatch
  const dispatch = useDispatch();

  // on page load
  useEffect(() => {
    dispatch({type:'FETCH_OWNER_LIST'});

  }, []);

  return (
    <Router>
      <div>

        <Header />
        <br />
        <br />

      
        <Route path='/' exact>
          <Dashboard />
        </Route>

        <Route path='/owners' exact>
          <ManageOwners />
        </Route>
      </div>
   </Router>
  );
}

export default App;
