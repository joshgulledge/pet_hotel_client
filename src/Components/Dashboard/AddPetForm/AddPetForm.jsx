import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';


function AddPetFrom () {
  // declare dispatch
  const dispatch = useDispatch();

  // from the store
  const ownerList = useSelector(store => store.ownerList);

  // local states for the inputs
  const [petName, setPetName] = useState('');
  const [petColor, setPetColor] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petOwner, setPetOwner] = useState('');

  // on form submit
  function submitForm (event) {
    event.preventDefault();

    const newPet = {
      pet_name: petName,
      pet_breed: petBreed,
      color: petColor,
      owner_id: petOwner
    };

    dispatch({
      type: 'ADD_PET',
      payload: newPet
    })
    console.log(petOwner);

    clearForm();
  }; // end submitForm

  function clearForm () {
    setPetName('');
    setPetColor('');
    setPetBreed('');
    setPetOwner('');
  }; // end clearForm

  return (
    <div>
      <form onSubmit={submitForm}>

        <input type="text" onChange={(e)=>setPetName(e.target.value)} value={petName} placeholder="Pet name" />

        <input type="text" onChange={(e)=>setPetColor(e.target.value)} value={petColor} placeholder="Pet Color" />

        <input type="text" onChange={(e)=>setPetBreed(e.target.value)} value={petBreed} placeholder="Pet Breed" />

          {/* dropdown goes here */}
        <label htmlFor="owners">Pet Owner:</label>

        <select onChange={(e) => setPetOwner(e.target.value)}  value={petOwner} name="owners">
          <option value={''}>
            Pick a Owner
          </option>
          {ownerList.map((innerOwnerArray, index) => {
            console.log('innerOwnerArray', innerOwnerArray[1]);
            return (
              <option key={index} value={innerOwnerArray[1]}>{innerOwnerArray[2] + ' ' + innerOwnerArray[3]}</option>
            )
          })}
          
        </select>

        <input type="submit" />
      </form>
    </div>
  )
}; // end AddPetForm

export default AddPetFrom;
