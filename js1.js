const quizdb=[
    
    {question: "Q1: What is the full form of HTML",
    a: "Hello to my land",
    b:"Hey Text me Link",
    c:"Hyper text markup Language",
    d: "Hyper text Makeup Language ",
    ans:" ans3" 

    },
    {question: "Q2: What is the full form of CSS",
    a: "cascade seep set",
    b:"catty seep set",
    c:"casada style sheet",
    d: "cascade style sheet ",
    ans:" ans4" 

    },
    {question: "Q3: What is the full form of JS",
    a: "Javascript",
    b:"Javastyle",
    c:"Javaset",
    d: "Javascripty ",
    ans:" ans1" 

    },
    {question: "Q4: What is the full form of HTTP",
    a: "Helo type text protocol",
    b:"Hypertext Transfer Protocol",
    c:"Hyper text Trap Protocol",
    d: "Hyper text Makeup Part ",
    ans:" ans2" 

    }


];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector('#showscore');

let questioncount=0;
let score=0;

const loadQuestion=()=>{
    const questionlist=quizdb[questioncount];
    question.innerText=questionlist.question;
    option1.innerText=questionlist.a;
    option2.innerText=questionlist.b;
    option3.innerText=questionlist.c;
    option4.innerText=questionlist.d;

}
loadQuestion();

const getCheckAnswer=()=>{
let answer;
answers.forEach((curansele)=>{
    if(curansele.checked)
    {
        answer=curansele.id;
    }
});
    return answer;
};
const deselectall=()=>{
    answers.forEach((curansele)=>curansele.checked=false);
}
submit.addEventListener('click',()=>{
    const checkanswer=getCheckAnswer();
    console.log(checkanswer);
if(checkanswer===quizdb[questioncount].ans){
    score++;
};
questioncount++;
deselectall();
if(questioncount<quizdb.length)
{
    loadQuestion();
}

else{
    showscore.innerHTML=`<h3> You scored ${score}/${quizdb.length}</h3> 
    <button class="btn" onclick="location.reload()">Play Again </button> `;
    showscore.classList.remove('scorearea');

}
});





























































