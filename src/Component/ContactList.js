import React from 'react'
import ContactCard from './ContactCard';
export default function ContactList(props) {
  console.log(props);
  const deleteContactHandler=(id)=>{
    props.getContactId(id);
  };
    const RenderedContactList=props.contacts.map((contact)=>{
    return (
        <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
    );
  })
  return (
    <div className='container fluid line-bottom'>
      <h1>{RenderedContactList}</h1>
    </div>
  )
}
