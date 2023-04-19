import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {
  //  How to render a list in react, below is how to create a list
  const contacts = [
    {
      id: "1",
      "name": "Chaitra Boggaram",
      "email": "cboggaram@gmail.com",
    },
    {
      id: "2",
      "name": "Nakul Vankdari Ramesh",
      "email": "nvankadari@gmail.com",
    }
  ]
  return (

    // The <div> tage looks like HTML but it is not HTML and it is JSX (Combination of JavaScript and HTML), as HTML code cannot be written in JavaScript file. This is working because we are importing React Library
    <div className='ui container'>

      {/* Adding a / in the end of the starting header tag is auto close i.e no closing tag required if no information to be given in that tag*/}
      <Header />   
      <AddContact />
      <ContactList contacts={contacts}/> {/* Passing the list and this can be accessed via props (add the props like this in ContactList.js file const ContactList = (props))*/}
      
    </div>
  );
}

export default App;
