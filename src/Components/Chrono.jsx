import React from 'react'
import { AfficherTemps } from './AfficherTemps'

export default class Chrono extends React.PureComponent{

    constructor(props){
        super(props)
        this.state = {
            ms : 0, 
            interval : null
        }
        this.next = this.next.bind(this)
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.reset = this.reset.bind(this)

    }

    next(){
        let now = Date.now()
        let diff = now - this.startTime
        this.startTime = now
        this.setState((s, p) => ({
            ms : s.ms +parseInt(diff)
        }))
    }
    start(){
        this.startTime = Date.now();
        let inter = setInterval(() => this.next(), 10)
        this.setState({interval: inter})
    }
    stop(){
        clearInterval(this.state.interval)
        this.setState({interval : null})
    }
    reset(){
        this.setState({ms : 0})
        if(this.state.interval !== null ){
            this.stop()
        }
        this.props.ajouterTemps(this.state.ms)
    }

    render(){
        return(
            <div>
                <AfficherTemps titre = 'chrono' ms = {this.state.ms }/>
                
                <button onClick= {this.start} disabled = {this.state.interval !== null} >Start</button>
                <button onClick = {this.stop}>Stop</button>
                <button onClick = {this.reset}>Reset</button>
            </div>
        )
    }
}