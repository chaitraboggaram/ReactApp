import React from "react";

const ContactCard = (props) => {
    // Instead of always typing props.contact.name we can directly use name
    const {id, name, email} = props.contact;

    return (
        <div className="item">
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon" style={{color: "red", marginTop:"7px"}}></i>
        </div>
    )
}

export default ContactCard;
