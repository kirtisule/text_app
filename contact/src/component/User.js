import React from 'react'

 const User=({ contact, deleteText })=> {
    if (!contact) {
        return null;
      }
   
  return (
    <>
     <div>
      <h2>Contact Detail</h2>
      <p>FirstName: {contact.firstName}</p>
      <p>LastName: {contact.lastName}</p>
      <button onClick={() => deleteText(contact.id)}>Delete</button>
    </div>
    </>
  )
}
export default User