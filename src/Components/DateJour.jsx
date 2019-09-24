import React from 'react'

export default class DateJour extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            DateJour: new Date()
        }

    }

    render(){
        return(
            <div>
                <p>Nous sommes le {this.state.DateJour.getDate()} {this.state.DateJour.toLocaleString('default', { month: 'long' })} {this.state.DateJour.getFullYear()}</p>
            </div>
        )
    }
}