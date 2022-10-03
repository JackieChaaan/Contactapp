import React from 'react'
import Contact from '../Components/Contact';
import Form from '../Components/Form';
import './Home.css';
function Home({ formSub, contacts ,deleteContact , favToggle}) {
    return (
        <div className='container'>
            <div className="main-form">
                <Form formSubb={formSub} />
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
                {contacts.map((singleContact) => {
                    return <Contact key={singleContact.id} contacts={singleContact} deleteContact = {deleteContact} favToggle = {favToggle}/>
                })}
                {contacts.length === 0 && <div>No Contact to show</div>}
            </div>
        </div>
    )
}

export default Home
