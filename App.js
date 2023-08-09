//exercise 1.6




import { useState } from 'react'
import React from 'react';
 
 
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const setGoodClick = () => { 
    setGood(good + 1)
    //setClicks(newClicks)
  }

  const setNeutralClick = () => { 
    setNeutral(neutral + 1)
    //setClicks(newClicks)
  }

  const setBadClick = () => { 
    setBad(bad + 1)
    //setClicks(newClicks)
  }



  
  return (
    <div>
      <h1>give feedback</h1>   



      <button onClick={setGoodClick}>good</button>
      <button onClick={setNeutralClick}>neutral</button>    
      <button onClick={setBadClick}>bad</button>    

      <h1>statistics</h1>   

      <p>good {good}</p> 
      <p>neutral {neutral}</p>
      <p> bad {bad} </p>
      </div>
  )
}

export default App
 









//1.7


import { useState } from 'react'
import React from 'react';
 
 
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)
  const [scoreCount, setScoreCount] = useState(0)




  const setGoodClick = () => { 
    setGood(good + 1)
    setScore(score + 1) 
    setScoreCount(scoreCount + 1)
    setAll(all+1)
    //setClicks(newClicks)
  }

  const setNeutralClick = () => { 
    setNeutral(neutral + 1)
     setScoreCount(scoreCount + 1)
     setAll(all+1)

    //setClicks(newClicks)
  }

  const setBadClick = () => { 
    setBad(bad + 1)
    setScore(score - 1) 
    setScoreCount(scoreCount + 1)
    setAll(all+1)

    //setClicks(newClicks)
  }

  const average = score / scoreCount;
  const percent = (good/ all) * 100;


 
  return (
    <div>
      <h1>give feedback</h1>   



      <button onClick={setGoodClick}>good</button>
      <button onClick={setNeutralClick}>neutral</button>    
      <button onClick={setBadClick}>bad</button>    

      <h1>statistics</h1>   

      <p>good {good}</p> 
      <p>neutral {neutral}</p>
      <p> bad {bad} </p>
      <p> all {all} </p>
      <p> average {average} </p>
      <p> positive {percent} %</p>


      </div>
  )
}
 

export default App
 













//1.8



import { useState } from 'react'
import React from 'react';
 
 

const Statistics = (props) => {
 
  return (
    <div>

  <p>good {props.good}</p> 
  <p>neutral {props.neutral}</p>
  <p> bad {props.bad} </p>
  <p> all {props.all} </p>
  <p> average {props.average} </p>
  <p> positive {props.percent} %</p>

  </div>

  )
}




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)
  const [scoreCount, setScoreCount] = useState(0)

return(
<div>

<br />

<button onClick = {() => {setGood(good + 1); setScore(score + 1); setScoreCount(scoreCount + 1); setAll(all+1);}}>good</button>
<button onClick = {() => {setNeutral(neutral + 1); setScoreCount(scoreCount + 1); setAll(all+1);}}>neutral</button>
<button onClick = {() => {setScore(score - 1); setScoreCount(scoreCount + 1); setAll(all+1); setBad(bad + 1);}}>bad</button>
 

<br />

<h1>Statistics</h1>
			
			<br />

      <Statistics
      good={good} 
      neutral= {neutral} 
      bad= {bad} 
      all= {good+neutral+bad} 
      average= {(good+neutral+bad)/all} 
      percent= {(good / all)*100}
      /> 

</div> 


)
}

export default App












//1.9


import { useState } from 'react'
import React from 'react';
 
 
const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <h1>press the buttons to see the statistics. </h1>
      </div>
    )
  }


  return (
   
<div>

<p>good {props.good}</p> 
<p>neutral {props.neutral}</p>
<p> bad {props.bad} </p>
<p> all {props.all} </p>
<p> average {props.average} </p>
<p> positive {props.percent} %</p>

</div>


  )
}

 




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
   
return(
<div>

<br />

<button onClick = {() => setGood(good + 1) }>good</button>
<button onClick = {() => setNeutral(neutral + 1) }>neutral</button>
<button onClick = {() => setBad(bad + 1)}>bad</button>
 

<br />

<h1>Statistics</h1>
			
			<br />

      <Statistics
      good={good} 
      neutral= {neutral} 
      bad= {bad} 
      all= {good+neutral+bad} 
      average= {(good - bad)/(good+neutral+bad)} 
      percent= {(good / (good+neutral+bad))*100}
      /> 

</div> 


)
}

export default App


