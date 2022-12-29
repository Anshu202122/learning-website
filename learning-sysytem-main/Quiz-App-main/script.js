const quizDB=[
    {
        question: "Q1. Which of the following is the original creator of the C++ language?",
        a: "Bjarne Stroustrup",
        b: "Brian Kernighan",
        c: "Dennis Ritchie",
        d: "Ken Thompson",
        ans: "ans1"
    },
    {
        question: "Q2. C++ is a ___ type of language ?",
        a: "high-level language",
        b: "low-level language",
        c: "Middle-level language",
        d: "non of the above",
        ans: "ans3"
    },
    {
        question: "Q3. The C++ language is ______ object-oriented language.",
        a: "Partial Object-oriented",
        b: "Semi Object-oriented or Partial Object-oriented",
        c: "not Object-oriented",
        d: "non of the above",
        ans: "ans2"
    },

];
let questionCount=0;
let score=0;
const question=document.querySelector("#question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const button1=document.querySelector(".btn");
const answers=document.querySelectorAll(".ans");
const showScore=document.querySelector(".scoreArea");

function loadQuestion(){
    const Qlist=quizDB[questionCount];
    question.innerHTML=Qlist.question;
    option1.innerHTML=Qlist.a;
    option2.innerHTML=Qlist.b;
    option3.innerHTML=Qlist.c;
    option4.innerHTML=Qlist.d;
    if(questionCount==2){
        button1.innerHTML="Submit";
    }
    else{
        button1.innerHTML="Next";
    }
};
loadQuestion();

function getCheckedAns(){
    let answer;
    answers.forEach(element => {
        if(element.checked){
            answer=element.id;
        }
    });
    return answer;
}

button1.addEventListener("click",()=>{
    let checkedAns=getCheckedAns();
    if(checkedAns==quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    answers.forEach(element => {
        element.checked=false;
        }
    );
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML='<h3>Your Score: ' + score +'/'+quizDB.length+'</h3><button class="btn1" onclick="location.reload()">try Again</button>';
        showScore.style.display="block";
        button1.style.display="none"
    }
});