import { useSelector } from 'react-redux';
import './ManageOwnersTable.css'

function ManageOwnersTable() {

  const owners = useSelector(store => store.ownerList);

  const handleDelete = () => {
    console.log('DELETE CLICK');
  }

  return (
    <div>
      <table id="ownersTable">
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Number of Pets</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {owners.map(owner => { 
            return (
              <tr key={owner[1]}>
                <td>{owner[2]}</td>
                <td>{owner[3]}</td>
                <td>{owner[0]}</td>
                <td>
                  <button onClick={handleDelete}>DELETE</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ManageOwnersTable;