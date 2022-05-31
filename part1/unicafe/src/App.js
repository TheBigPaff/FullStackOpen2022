import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>
      <h1>Statistics</h1>
      {
        (good == 0 && neutral == 0 && bad == 0) ? 
        "No feedback given." : <Statistics good={good} neutral={neutral} bad={bad}></Statistics>  
      }
          
    </div>
  )
}

export default App