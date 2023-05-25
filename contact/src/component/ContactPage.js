import React,{useState,useEffect}from 'react'


const ContactPage=({ addText, selectedText, editText })=> {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    if (selectedText) {
      setFirstName(selectedText.firstName);
      setLastName(selectedText.lastName);
    } else {
      setFirstName('');
      setLastName('');
    }
  }, [selectedText]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedText) {
      editText(selectedText.id, { id: selectedText.id, firstName, lastName });
    } else {
      const id = new Date().getTime().toString();
      addText({ id, firstName, lastName });
    }

    setFirstName('');
    setLastName('');
  };
 
 

 
  return (
    <>
 
   
  
<h3 className='text-center'>Create Contact </h3>
      <form onSubmit={handleSubmit}>
        
  <div className="mb-9 d-flex flex-row my-3">
    <label htmlFor="exampleInputEmail1" className="form-label mx-3">First Name</label>
    <input type="text" className="form-control col-lg " id="exampleInputEmail1"  value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required/>
</div>
  <div className="mb-9 d-flex flex-row my-3 ">
    <label htmlFor="exampleInputPassword1" className="form-label mx-3">Last Name</label>
    <input type="text" className="form-control col-lg " id="exampleInputPassword1"  value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required/>
   </div>
 
  
  <div className="d-grid gap-2 col-6 mx-auto my-3">
  <button className="btn btn-primary" type="submit"  >{selectedText ? 'Update Contact' : 'Add Contact'}</button>
  
  
</div>
</form>

 
    
    


    </>
  )
}
export default ContactPage