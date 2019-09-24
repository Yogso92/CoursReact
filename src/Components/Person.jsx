import {PropTypes} from 'prop-types'
import React from 'react'


function Hello(props){
    return (
        <div>
            <h1> Bienvenue {props.name} sur l'application react</h1>
            <p> vous avez {props.age} ans</p>
        </div>
    )
}
Hello.propTypes = {
    name : PropTypes.string,
    age: PropTypes.number
}

export default Hello;