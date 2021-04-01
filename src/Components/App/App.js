import './App.css';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import ManageOwners from '../ManageOwners/ManageOwners';

function App() {
  // use dispatch
  const dispatch = useDispatch();

  // on page load
  useEffect(() => {
    dispatch({type:'FETCH_OWNER_LIST'});

  }, []);

  return (
   <div>
    <h1>testing stuff for now</h1>
    <Header />

    <Dashboard />

    <ManageOwners />
   </div>
  );
}

export default App;
