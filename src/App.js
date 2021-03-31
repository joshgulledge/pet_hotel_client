import './App.css';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

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
   </div>
  );
}

export default App;
