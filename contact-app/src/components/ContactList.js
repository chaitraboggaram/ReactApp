import React from "react";

// Getting the props from App.js which is using ContactList tag
const ContactList = (props) => {
    console.log(props);         // This will show the props in the inspect option on the webpage --> Right click on webpage --> Inspect --> Console --> Expand the Object contacts: Array to view the props details
    
    // Mapping the contact list props using below function and add the below function in return statement below to complete the rendering
    const renderContactList = props.contacts.map((contact) => {
        return (
            <div className="item">
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
                <i className="trash alternate outline icon"></i>
            </div>
        ); 
    }
    );

    return (
        <div className="ui celled list">{renderContactList}</div>
    );
};

export default ContactList;