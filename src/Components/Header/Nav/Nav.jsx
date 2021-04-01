import { Link } from 'react-router-dom';

function Nav () {

  return(
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <Link to='/'>
        Dashboard
      </Link>
      <Link to='/owners'>
        Manage Owners
      </Link>
    </div>
  )
}; // end Nav

export default Nav;