import React from 'react'

export default class Chrono extends React.Component{

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
        const newState = {...this.state, ...{ms : this.state.ms+10}}
        this.setState(newState)
    }
    start(){
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
    }

    render(){
        const {ms} = this.state
        
        const min = Math.trunc(ms /60000)
        const s = Math.trunc(ms/1000) - (min*60)
        
        const fms = ms % 1000

        return(
            <div>
                <p>{min < 10 && 0}{min}'{s<10 && 0}{s}"{fms<10 && 0}{fms<100 && 0}{fms}ms</p>
                <button onClick= {this.start} disabled = {this.state.interval !== null} >Start</button>
                <button onClick = {this.stop}>Stop</button>
                <button onClick = {this.reset}>Reset</button>
            </div>
        )
    }
}