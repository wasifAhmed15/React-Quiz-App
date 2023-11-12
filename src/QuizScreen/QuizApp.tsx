import QuizData from "./QuizData"
import { useState } from "react"
import { Button } from "react-bootstrap"
import QuizResult from "./QuizResult"
export default function Quiz(){
    let [currentQ,SetCurrentQ]=useState(0)
    let [select,setselectoption]=useState(0)

    let [score,setScore] = useState(0)

    let [showResult,setShowResult]=useState(false)

    let ChangeQuestion = ()=>{
        CheckQ()
       if(currentQ < QuizData.length-1){
        SetCurrentQ(currentQ+1)
        setselectoption(0)
       }
       else{
           setShowResult(true)
       }

    }

    let CheckQ = ()=>{
        if(select==QuizData[currentQ].Anwser){
            setScore(score+1)

        }
    }

    let Perious = ()=>{
        if(currentQ < QuizData.length+1){
            SetCurrentQ(currentQ-1)
        }
    }
    
    return<>
{
    showResult ? <QuizResult Total={QuizData.length} score={score}/>:


<div className=" h-screen flex items-center ">
    <div className="w-50 border m-auto text-center shadow-lg rounded-md">
    <div className="text-center py-3">
<h1>Quiz App</h1>

    </div>

<div className=" shadow-md rounded-md border py-5">
    <span  className="fs-3 ">{currentQ+1}.</span>
    <span className="fs-3 font-semibold">{QuizData[currentQ].Question}</span>
   

</div>

<div className="py-2">
    {
        QuizData[currentQ].Option.map((x,i)=>{
            return <div key={i} className="w-50 m-auto py-3 "> 

<button 
 className={`w-100 py-2 rounded-md  	border rounded-md hover:bg-green-400	
 hover:text-white hover:border:none ${select== i+1 ? 'bg-green-400  text-white  shadow-lg': null }`}
  onClick={()=>setselectoption(i+1)}



>{x}</button>
            </div>
            
            
            
            
        })
    }

</div>

<div className="py-3 ">
    <Button variant="danger" className="m-2" onClick={()=>ChangeQuestion()}>Next</Button>
    <Button variant="danger" className="m-2" onClick={()=>Perious()}>Previous</Button>
</div>



    </div>

</div>
    
    
}
    </>
}

