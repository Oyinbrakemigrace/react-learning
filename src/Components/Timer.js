import React, { useState } from 'react'

function Timer() {
    const[timer, setTimer]= useState(0)

    function startTimer(){
        window.myTimer= setInterval(()=>{
            setTimer((time)=>time+1)
        }, 1000)
    }

    function stopTimer(){
        clearInterval(window.myTimer)
    }

    function resetTimer(){
        clearInterval(window.myTimer)
        setTimer(0)
    }

    return(
        <div>
            <p>{Math.trunc(timer/60)} mins</p>
            <p>{timer%60} secs</p>
            <div>
                <button onClick={startTimer}>start</button>
                <button onClick={stopTimer}>stop</button>
                <button onClick={resetTimer}>reset</button>
            </div>
        </div>
    )
}

export default Timer