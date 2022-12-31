import React from 'react'
import PropTypes from 'prop-types';

export const User = (props) => {
    const { name, id } = props.user;
    return (
        <div>
            <p>Name: {name}</p>
            <p>Id: {id}</p>
        </div>
    )
}

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number
    })
}

/*
User.propTypes = {
    //key-value
    username: PropTypes.string,
    userid: PropTypes.number
}

User.defaultProps = {
    username: 'Default Name',
    userid: 0,
}
*/
