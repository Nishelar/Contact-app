import React from 'react'
import img1 from '../Images/img1.png'
export default function ContactCard(props) {
  const {id,name,email}=props.contact
  return (
    <div className="card bg-secondary" style={{ width: '100%' ,marginTop:'20px' ,color:'whitesmoke'}}>
             <div className="card-body d-flex flex-row">
                  <div><img src={img1} alt="user"/></div> 
             <div>
                  <h5 className="card-title" style={{marginBottom:'5px'}}>{name}</h5>
                  <h5 className="card-text" style={{margin: '5px 0px',}}>{email}</h5>
             </div>
             <button className='bg-danger card-btn'style={{fontSize:'10px'}} onClick={()=>props.clickHandler(id)}>Delete</button>
</div>

    </div>
  )
}
