import React from 'react'

export function AfficherTemps({titre, ms}){
    const min = Math.trunc(ms /60000)
    const s = Math.trunc(ms/1000) - (min*60)
    const fms = Math.trunc(ms % 1000)
    return (
        <div>
            <h3>{titre}</h3>
            <p>{min < 10 && 0}{min}'{s<10 && 0}{s}"{fms<10 && 0}{fms<100 && 0}{fms}ms</p>
        </div>
    )
}