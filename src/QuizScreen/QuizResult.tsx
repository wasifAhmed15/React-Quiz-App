type typeProps ={
    score : number,
    Total : number
}

export default function QuizResult (Props:typeProps){
    let {score,Total}=Props
    return <>
    <div className="h-screen flex items-center">
    <div className="w-50 border m-auto text-center  rounded-md">
        <div className="text-center">
           <h1>Result</h1>
        </div>

        <div className="text-center">
        <h1> Total Marks :{Total} </h1>
        <h1>Your Score : {score}</h1>


        </div>


        </div>

    </div>
    
    
    
    
    </>

}