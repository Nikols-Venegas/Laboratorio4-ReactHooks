import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const [average, setAverage] = useState(0)


  const clicgood = () => {
    setGood(good+1)
    setAverage(average+1)
  }
  
  const clicneutral = () => {
    setNeutral(neutral+1)
    setAverage(average+0)
  }

  const clicbad = () => {
    setBad(bad+1)
    setAverage(average-1)
  }
  


  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <button onClick={clicgood}>good</button>
        <button onClick={clicneutral}>neutral</button>
        <button onClick={clicbad}>bad</button>
      </div>
      <div>
        <h2>statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good+neutral+bad}</p>
        <p>average {average/(good+neutral+bad)}</p>
        <p>positive {(good/(good+neutral+bad))*100}%</p>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))