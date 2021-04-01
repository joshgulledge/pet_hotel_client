import { useDispatch, useSelector } from 'react-redux';
import './ManageOwnersTable.css'

function ManageOwnersTable() {
  const dispatch = useDispatch();

  const owners = useSelector(store => store.ownerList);

  const handleDelete = (id) => {
    console.log('DELETE CLICK. id:', id);
    dispatch({
      type: 'DELETE_OWNER',
      payload: id
    })
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
          {owners.map((owner, index) => { 
            return (
              <tr key={index}>
                <td>{owner[2]}</td>
                <td>{owner[3]}</td>
                <td>{owner[0]}</td>
                <td>
                  <button onClick={() => handleDelete(owner[1])}>DELETE</button>
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