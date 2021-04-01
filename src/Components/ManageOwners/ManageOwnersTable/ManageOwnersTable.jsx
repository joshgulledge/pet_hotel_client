import { useSelector } from 'react-redux';

function ManageOwnersTable() {

  const owners = useSelector(store => store.ownerList);

  return (
    <div>
      <table>
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
                <td></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ManageOwnersTable;