import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {
  return (
    // The <div> tage looks like HTML but it is not HTML and it is JSX (Combination of JavaScript and HTML), as HTML code cannot be written in JavaScript file. This is working because we are importing React Library
    <div>
      {/* Adding a / in the end of the starting header tag is auto close i.e no closing tag required if no information to be given in that tag*/}
      <Header />   
      <AddContact />
      {/* <ContactList /> */}
      
    </div>
  );
}

export default App;
