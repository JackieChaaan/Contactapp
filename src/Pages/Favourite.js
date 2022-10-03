import React from 'react'
import Contact from '../Components/Contact'

function Favourite({contacts , deleteContact , favToggle}) {
  return (
    <div className='container my-5'>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
        {contacts.map((singleContact)=>{
          return (
            singleContact.fav && (
              <Contact
                 key={singleContact.id}
                 favToggle ={favToggle}
                 deleteContact = { deleteContact}
                 contacts = {singleContact}/>
            )
          )
        })}
        {contacts.filter(single=>single.fav).length === 0 && <h3>No Favourite Contact</h3>}
      </div>
    </div>
  )
}

export default Favourite
