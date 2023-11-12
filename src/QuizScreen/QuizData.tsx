type Quiztype ={
    Question:string,
    Option:string[]
    Anwser:number
}[]

 const QuizData:Quiztype=[
    {
        Question: "Which language runs in a web browser?",
        Option: ["Java", "C", "Python", "JavaScript"],
        Anwser: 4,
      },
      {
        Question: "What does HTML stand for?",
        Option: [
          "Hyper Text Markup Language",
          "High Tech Multi-purpose Language",
          "Hyperlink and Text Markup Language",
          "Home Tool Markup Language",
        ],
        Anwser: 1,
      },
      {
        Question: "Which of the following is a programming language?",
        Option: ["HTML", "CSS", "Java", "XML"],
        Anwser: 3,
      },
      {
        Question: "What does CSS stand for?",
        Option: [
          "Counter Strike: Source",
          "Corrective Style Sheet",
          "Computer Style Sheet",
          "Cascading Style Sheet",
        ],
        Anwser: 4,
      },
      {
        Question: "In programming, what does 'API' stand for?",
        Option: [
          "Advanced Programming Interface",
          "Application Programming Interface",
          "Automated Programming Interface",
          "Advanced Prototype Interface",
        ],
        Anwser: 2,
      },
    
  
  
    
]
export default QuizData