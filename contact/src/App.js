
import './App.css';
import {useState} from "react"
import ContactDetails from './component/ContactDetails';
import ContactPage from './component/ContactPage';
import User from './component/User';
function App() {
  const [text, setText] = useState([]);
  const [selectedText, setselectedText] = useState(null);

  const addText = (contact) => {
    setText([...text, contact]);
  };

  const deleteText = (contactId) => {
    const updatedContacts = text.filter((contact) => contact.id !== contactId);
    setText(updatedContacts);
    setselectedText(null);
  };

  const editText = (contactId, updatedContact) => {
    const updatedContacts = text.map((contact) =>
      contact.id === contactId ? updatedContact : contact
    );
    setText(updatedContacts);
    setselectedText(updatedContact);
  };

  const selectText = (contact) => {
    setselectedText(contact);
  };
  return (
    <>
      
      <h2 className='text-center p-1 mb-2 bg-primary text-white'>Contact Page</h2>
      <div className="container">
      <div className=' border border-primary  '>
          <ContactPage addText={addText} selectedText={selectedText} editText={editText}/>
        </div>
      <div className="  d-flex flex-row">
       
        <div className='container border border-primary  '>
          <ContactDetails text={text} selectText={selectText} deleteText={deleteText}/>
        </div>
        <div className='container border border-primary'>
          <User contact={selectedText} deleteText={deleteText}/>
       
      </div>
      </div>
      </div>
    </>
  );
}

export default App;
