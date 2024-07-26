import {FaStar} from 'react-icons/fa'
import './App.css';
import { useState } from 'react';

function App({nstar=7}) {
  const[rating,setRating]=useState(0);
  const[hoverStar,setHoverStar]=useState(0);

function handleClick(index){
 setRating(index);
}
function handleMouseMove(index){
  setHoverStar(index);

}
function handleMouseLeave(){
 //setHoverStar(rating);

}



  return (
    <div className="star">
      <h1>Star Rating</h1>
      {[...Array(nstar)].map((_,i)=>{
        return <FaStar className={i<(rating||hoverStar)?"active":"nactive" // if present star is less than rating value we have that mean we should have to active those star or hover stars
          }
        key={i} 
        onClick={()=>handleClick(i+1)} 
        onMouseMove={()=>handleMouseMove(i+1)}
        onMouseLeave={()=>handleMouseLeave()}/>
      })}
    </div>
  );
}

export default App;
