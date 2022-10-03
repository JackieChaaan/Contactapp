import React from 'react';
import { Button } from 'react-bootstrap';
import './Contact.css'

function Contact({ contacts: {name,email,phone,id,fav}, deleteContact , favToggle}) {
  // console.log(contacts);
  return (
    <div className='contact-list'>
      <div className="col">
        <div className="card w-100 shadow-sm">
          <div className="card-header">
            <div className="row">
              <div className="col-6">{name}</div>
              <div onClick={()=>{favToggle(id)}} className="col-2 offset-4"> <i className={fav?"bi bi-star-fill text-warning":"bi bi-star text-warning"}></i></div>
            </div>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>{email}</li>
            <li className='list-group-item'>{phone}</li>
          </ul>
          <Button onClick={()=>{deleteContact(id)}} variant='outline-danger'>Delete</Button>
        </div>
      </div>
    </div>
  )
}

export default Contact
