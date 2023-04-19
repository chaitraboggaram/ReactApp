import React from "react";

// Creating a class in JavaScript and React.Component is our component
class AddContact extends React.Component {
    render() {
        // render function should always have a return statement
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    {/* Below 2 input tages the two ways of using and closing the input tag, it can be used for any HTML tags as long as you don't have to write anything in the tag */}
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;