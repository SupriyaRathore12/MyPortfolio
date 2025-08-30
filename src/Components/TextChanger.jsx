import React, { useCallback } from 'react'
import { useState,useEffect } from 'react'

const TextChanger = () => {
    const texts=["Software Developer", " Web Developer","Problem Solver","Frontend Enthusiast"];
    const[currentText,setCurrentText]=useState();
    const[endValue,setEndValue]=useState(1);
    const[isForward,setIsForward]=useState(true);
    const[index,setIndex]=useState(0);

    useEffect(() => {
        const intervalId=setInterval(()=>{
            const fullText=texts[index];

            setCurrentText(fullText.substring(0,endValue));

        if(isForward){
            if(endValue>=fullText.length){
            setTimeout(()=>setIsForward(false),800);
            }
            else{
                 setEndValue(prev=>prev+1);
            }
        }
        else{
            if(endValue<=0){
                setIsForward(true);
                setIndex(prev=>(prev+1)%texts.length)
            }
            else{
                setEndValue(prev=>prev-1);
            }
        }
        },100);

        return()=>clearInterval(intervalId)
      
    }, [endValue,isForward,index,texts]);
    

  return (
    <div className='transition ease duration-300 text-3xl font-bold'>{currentText}
     <span className="animate-ping">|</span>
    </div>
  )
}

export default TextChanger