import React from 'react'
// import { Link } from 'react-router-dom'

const ContactDetails=({ text, selectText, deleteText })=> {
  return (
    <div >
      
      <h2 >Contact List</h2>
      {text.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
      text.map((contact) => (
        <div key={contact.id}>
          <p>
            {contact.firstName} - {contact.lastName}
          </p>
          <button onClick={() => selectText(contact)}>View Details</button>
          <button onClick={() => deleteText(contact.id)}>Delete</button>
        </div>
      ))
      )}
    </div>
  )
}

export default  ContactDetails