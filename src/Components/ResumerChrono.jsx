import React from 'react';
import { AfficherTemps } from './AfficherTemps';


export default class ResumerChrono extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            plusGrand : props.plusGrand
        }

    }

    
    render(){
        const {times}   = this.props
        const best = (this.state.plusGrand) ? Math.max : Math.min
        return(
            <>
                {times.length > 0 && 
                    <>
                        <AfficherTemps titre = "Meilleur temps:" ms = {best(...times)}/>
                        <AfficherTemps titre = "Moyenne:" ms = {times.length !== 0 && times.reduce((a, b) => a+b)/times.length}/>
                        <AfficherTemps titre = "Dernier temps:" 
                                        ms = { times[times.length-1]}
                        />
                    </>
                }
            </>
        )
    }
}