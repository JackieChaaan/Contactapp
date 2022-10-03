
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Pages/Home';
import Favourite from './Pages/Favourite';
import NavLinks from './Components/NavLinks';
import { useEffect, useState } from 'react';


function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContact = async () => {
      const contactFormServer = await fetchdata();
      setContacts(contactFormServer);
    };
    getContact();
  }, []);

  const formSuba = async (data) => {
    // console.log(typeof(data));
    const res = await fetch('http://localhost:3004/contacts/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
   

    const newData = await res.json();
    // console.log(newData);
    if(res.ok){
    setContacts([...contacts, newData]);}
    // console.log(contacts);
  }

  const fetchdata = async () => {
    const res = await fetch('http://localhost:3004/contacts/');
    const data = await res.json();

    return data;
  }


  const deleteContact = async (id) => {

    const res = await fetch(`http://localhost:3004/contacts/${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      let newContact = contacts.filter((singleContact) => {
        return singleContact.id !== id;
      });
      setContacts(newContact)
    }
  };

  const getCon = async (id) => {
    const res = await fetch(`http://localhost:3004/contacts/${id}`);
    const data = await res.json();

    return data;
  };

  const favToggle = async (id) => {

    const singlecon = await getCon(id);
    const updTask = { ...singlecon, fav: !singlecon.fav }

    const res = await fetch(`http://localhost:3004/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    
    if (res.status === 200) {
      let contactUpdated = contacts.map((singleContact) => {
        return singleContact.id === id ? { ...singleContact, fav: !singleContact.fav } : singleContact;
      })
      setContacts(contactUpdated);
    }
  };
  return (
    <Router>
      <NavLinks />
      <Routes>
        <Route exact path='/Contactapp' element={<Home formSub={formSuba} contacts={contacts} deleteContact={deleteContact} favToggle={favToggle} />}></Route>
        <Route exact path='/favourite' element={<Favourite contacts={contacts} deleteContact={deleteContact} favToggle={favToggle} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

