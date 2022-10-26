

 let quizQuestions = [
    {
       
        question: "The atomic number for lithium is 17?",
        answerOptions: ["true", "false"],
        rightAnswer: "false",
        /* correctAnswerText: "The atomic number for lithium is 17"  */
      },
      {
          question: "A cross between a horse and a zebra is called a 'Hobra'?",
          answerOptions: ["true" , "false"],
        rightAnswer: "false",
          /* correctAnswerText: "A male zebra and a female horse is called a 'zorse', and a female zebra and a male horse is called a 'zonkey'?" */ 
      }, 
      {
          question: "The black box in a plane is black?",
          answerOptions: ["true", "false"],
        rightAnswer: "false",
         /* correctAnswerText: "They're actually orange?"  */
        },
        {
          question: "Alliumphobia is a fear of garlic?",
          answerOptions: ["true", "false"],
          rightAnswer: "true",
          /* correctAnswerText: "This answer is true!" */
        },
        {
          question:"Prince Harry is taller than Prince William?",
          answerOptions: ["true", "false"],
          rightAnswer: "false",
          /* correctAnswerText:"Prince William is 1.91m, Prince Harry is 1.86m" */
        },
        {
          question:"The star sign Aquarius is represented by a tiger?",
          answerOptions: ["true", "false"],
          rightAnswer:"false",
          /* correctAnswerText: "It's a water-bearer ß" */
          
        },
        {
          question:"Meryl Streep has won two Academy Awards?",
          answerOptions: ["true", "false"],
          rightAnswer: "false",
          /* correctAnswerText: "she's won three! She won Best Actress for The Iron Lady in 2012, Best Actress for Sophie's Choice in 1983, Best Supporting Actress for Kramer vs. Kramer in 1980." */
        },
        {
          question: "Marrakesh is the capital of Morocco?",
          answerOptions: ["true", "false"],
          rightAnswer: "false",
          /* correctAnswerText:"it's Rabat" */
        },
        {
          question:"Idina Menzel sings 'let it go' 20 times in 'Let It Go' from Frozen?",
          answerOptions: ["true", "false"],
          rightAnswer:"false",
          /* correctAnswerText:"she sings it 21 times!" */
        },
        {
          question:"Waterloo has the greatest number of tube platforms in London?",
          answerOptions: ["true", "false"],
          rightAnswer:"true",
          /* correctAnswerText:"This is true!" */
        },

]


      let quizCont = document.querySelector("#quiz");
      let resultDiv = document.querySelector("#answer");
      let checkBtn = document.querySelector("#check-answer");
      let darkModeBtn = document.querySelector("#darkMode");
      let lightModeBtn = document.querySelector("#lightMode");
      let maxPoints = quizQuestions.length;

     
     
      

//Här börjar funktion som skapar hela quiz
function createQuiz(){

      let quizQuestion = [];
//Här skapar jag forEach funktion som ska skapa h3 för varje fråga
  quizQuestions.forEach(function(ques, iQuestion){

      let answerValue= [];

  //Här skapar jag forEach funktion som skapar li tag för varje svar alternativ, med label och radio button
    ques.answerOptions.forEach(function(ans, iAnswer){
      answerValue+= `
    
      <li class = "myLi">
        <label>
          <input type='radio' name ="${iQuestion}" value ="${ans}">
          ${ans}
        </label>
      </li>
    
      `

   
    })

    quizQuestion+=`
      <form> 
        <h3 class = "questions" >${ques.question}</h3>
          <ul class= "mainUl" > ${answerValue} </ul>

          <div class = "rightAnswers" id = "right-ans-${iQuestion}"></div>
      </form> 
    `
    

  })

  quizCont.innerHTML = quizQuestion;


//Event listener för resultat knapp

  checkBtn.addEventListener("click", function(){
    
    let checkedRadioValue = document.querySelectorAll("input[type='radio']:checked");
   

     //Loopa igenom radio - Value
     
     let correctAnswer = 0;
     checkedRadioValue.forEach((answer, i,) => {
       
       let correctAns = document.querySelector(`#right-ans-${i}`);
       
     
     if (answer.value == quizQuestions[i].rightAnswer){
       
       correctAns.innerText = "This is correct!";
       correctAns.style.color = "green";
       correctAnswer++
      }
      
      else {
        
        correctAns.innerText = "This is not correct!" 
        correctAns.style.color = "Red";
      }
      
    })


    //Kolla resultat och skriva ut i DIV 
   
   if (correctAnswer>=maxPoints*0.75){
      resultDiv.innerText = "You did amazing!";
      resultDiv.style.color = "green";}

      else if (correctAnswer<maxPoints*0.5){
      resultDiv. innerText = "You did not pass the quiz!";
      resultDiv.style.color = "Red";
    }
      else if (correctAnswer>=maxPoints*0.5 || correctAnswer<maxPoints*0.75){
       resultDiv.innerText = "You passed!";
       resultDiv.style.color = "orange";
     }
    
  
})
  

}

// Darkmode event listener
darkModeBtn.addEventListener("click", () =>{

  document.body.classList.add("darkmode");
  document.body.style.background = "black";

})


//Light mode event listener 
lightModeBtn.addEventListener("click", ()=>{

  document.body.style.background = "white";
  

})

  
//Här kör vi funktionen som skapar hela quiz
createQuiz();
