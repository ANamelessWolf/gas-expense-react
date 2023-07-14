import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <header>
      <div className="container">
        <div className="text-center">
          <h2>{props.text}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </header>
  );
}

//Adding prop types validation

Header.defaultProps = {
  text: "GAS Expense App",
  description: "",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
