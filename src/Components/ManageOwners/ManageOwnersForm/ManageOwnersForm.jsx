import {useState} from 'react';

function ManageOwnersForm() {
  const [ownerInput, setOwnerInput] = useState({ first_name: '', last_name: '' });

  console.log('ownerInput:', ownerInput)

  const handleOwnerSubmit = (event) => {
    event.preventDefault();

    console.log('in handleOwnerSubmit');
  } // end handleOwnerSubmit



  return(
    <>
      <form onSubmit={handleOwnerSubmit}>
        <label htmlFor="ownerFirstNameInput">
          Add owner's first name:
          <input
            id="ownerFirstNameInput" 
            onChange={(event) => setOwnerInput({...ownerInput, first_name: event.target.value})}
            placeholder="Owner Name" 
            type="text" 
            value={ownerInput.first_name}
          />
        </label>
        
        <label htmlFor="ownerLastNameInput">
          Add owner's last name:
          <input
            id="ownerLastNameInput" 
            onChange={(event) => setOwnerInput({...ownerInput, last_name: event.target.value})}
            placeholder="Owner Name" 
            type="text" 
            value={ownerInput.last_name}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
} // end ManageOwnersForm

export default ManageOwnersForm;