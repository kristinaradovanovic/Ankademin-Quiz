

 let quizQuestions = [
    {
       
        question: "The atomic number for lithium is 17?",
        answerOptions: ["true", "false"],
        rightAnswer: "false",
        correctAnswerText: "The atomic number for lithium is 17" 
      },
      {
          question: "A cross between a horse and a zebra is called a 'Hobra'?",
          answerOptions: ["true" , "false"],
        rightAnswer: "false",
         correctAnswerText: "A male zebra and a female horse is called a 'zorse', and a female zebra and a male horse is called a 'zonkey'?" 
      },
      {
          question: "The black box in a plane is black?",
          answerOptions: ["true", "false"],
        rightAnswer: "false",
         correctAnswerText: "They're actually orange?" 
        },
        {
          question: "Alliumphobia is a fear of garlic?",
          answerOptions: ["true", "false"],
          rightAnswer: "true",
          correctAnswerText: "This answer is true!"
        }
]


      let quizCont = document.querySelector("#quiz");
      let resultDiv = document.querySelector("#answer");
      let checkBtn = document.querySelector("#check-answer");
      let changeColorBlueBtn = document.querySelector("#changeColorBlue");
      let changeColorPinkBtn = document.querySelector("#changeColorPink");
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
    
      <li>
        <label>
          <input type='radio' name ="${iQuestion}" value ="${ans}">
          ${ans}
        </label>
      </li>
    
      `

   
    })

    quizQuestion+=`
      <form> 
        <h3>${ques.question}</h3>
          <ul> ${answerValue} </ul>

          <div id = "right-ans-${iQuestion}"></div>
      </form> 
    `
    

  })

  quizCont.innerHTML = quizQuestion;

  checkBtn.addEventListener("click", function(){
    
    let checkedRadioValue = document.querySelectorAll("input[type='radio']:checked");
   

     //Loop through radio Value
     
     let correctAnswer = 0;
     checkedRadioValue.forEach((answer,i) => {
       
       let correctAns = document.querySelector(`#right-ans-${i}`);
       /*  console.log("correct",correctAns);
     console.log("question", quizQuestions[i].rightAnswer); */
     
     if (answer.value == quizQuestions[i].rightAnswer){
       
       correctAns.innerText = "This is correct!";
       correctAns.style.color = "green";
       correctAnswer++
      }
      
      else {
        
        correctAns.innerText = "This is not correct";
        correctAns.style.color = "Red";
      }
      
    })

    //Check the result and show it in DIV
    if (correctAnswer<2){
      resultDiv. innerText = "Not passed!";
      resultDiv.style.color = "Red";
    }
    else if (correctAnswer>=2){
      resultDiv.innerText = "You passed!";
      resultDiv.style.color = "Green";
    }
  })
  

}


let h1Text = document.querySelector("h1");
let h2Text = document.querySelector("h2");
let h3Text = document.querySelectorAll("h3");
let liText = document.querySelectorAll ("li");



changeColorBlueBtn.addEventListener("click", () => {
  document.body.style.background = "darkblue";
 
  h1Text.style.color = "white";
  h2Text.style.color = "lightpink";
  
  

});

changeColorPinkBtn.addEventListener("click", () => {
  document.body.style.background = "lightpink";
  h1Text.style.color = "darkblue";
  h2Text.style.color = "purple";

});



  
//Här kör vi funktionen som skapar hela quiz
createQuiz();