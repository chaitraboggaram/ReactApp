import React from "react";
import ContactCard from "./ContactCard"

// Getting the props from App.js which is using ContactList tag
const ContactList = (props) => {
    console.log(props);         // This will show the props in the inspect option on the webpage --> Right click on webpage --> Inspect --> Console --> Expand the Object contacts: Array to view the props details
    
    // Mapping the contact list props using below function and add the below function in return statement below to complete the rendering
    const renderContactList = props.contacts.map((contact) => {
        return (
            // Content about the props or contactlist is now added to ContactCard.js in ContactCard fuction
            // Import ContactCard.js and passing contact to here
            <ContactCard contact={contact}></ContactCard> 
        ); 
    }
    );

    return (
        <div className="ui celled list">{renderContactList}</div>
    );
};

export default ContactList;