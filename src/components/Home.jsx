import React, { useState } from 'react'

function Home() {
  const[weight,setWeight]=useState('')
  const[height,setHeight]=useState('')
  const[message,setMessage]=useState('')
  const[bmi,setBmi]=useState('')
  
  function handelBMI(e){
        const bmi=(weight/(height*height).toFixed(2))
        setBmi(bmi)
        if(bmi<5){
          setMessage("This is very low")
        }
        if(bmi>5){
          setMessage("This is very okay")
        }
  }

  return (
    <>
    <div>
    <input type='number' placeholder='Write weight here' value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
    </div>
     <div>
     <input type='number' placeholder='Write height here' value={height} onChange={(e)=>setHeight(e.target.value)}></input>
     </div>
      <div>
      <button onClick={handelBMI}>Calculate</button>
      <p>{bmi}</p>
      </div>
      <div>Your BMI is{message}</div>
    
    </>
  )
}

export default Home
