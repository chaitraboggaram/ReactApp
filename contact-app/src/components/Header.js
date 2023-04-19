import React  from "react";

// Function component
const Header = () => {
    return (
        // We are using className instead of class because Java already has a function class used for classes. To make this unique we use className here
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>Contact Manager</h2>
            </div>
        </div>
    );

};

// We need to export the Header first before using it in any other .js files
export default Header