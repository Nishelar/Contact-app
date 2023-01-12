import React,{useState,useEffect} from 'react'
import Header from './Component/Header'
import './App.css';
import AddContact from './Component/AddContact';
import ContactList from './Component/ContactList';
import uuid from "react-uuid"; 
function App() {

  const LOCAL_STORAGE_KEY="Contacts";
  const [Contacts,setContacts]=useState([]);
  
  useEffect(()=>{
    const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts)
 },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(Contacts));
 },[Contacts])



  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...Contacts,{id:uuid(),...contact}])

  };
  
  const removeContactHandler=(id)=>{
     const newContactList=Contacts.filter((contact)=>{
         return contact.id!==id;
     })
     setContacts(newContactList);
  }
  
  return (
      <div>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={Contacts} getContactId={removeContactHandler}/>
      </div>
  );
}

export default App;
