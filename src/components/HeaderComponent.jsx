import React from 'react'
import PropTypes from 'prop-types';



function HeaderComponent(props) {
  return (
    <header>
        <div className='container'>
            <h2>{props.text}</h2>
        </div>
    </header>
  )
}

//Adding prop types validation

HeaderComponent.defaultProps={
    text: 'GAS Expense App',
}

HeaderComponent.propTypes = {
    text: PropTypes.string,
}

export default HeaderComponent