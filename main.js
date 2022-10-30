
//Warmup Challenges
let span = document.querySelector(".mess-with-me");
span.style.fontSize = '40px';

let pSpan = document.querySelector("p.mess-with-me");
pSpan.style.backgroundColor = "green";

let imgHide = document.querySelector("#hide-me");
imgHide.style.display = "none";

let triceraptors = document.querySelector("#triceratops");
triceraptors.style.width = "324px";


//Event Listener Challenges

span.addEventListener("click",function(){
    span.style.background = "orange";
});

//---------------

triceraptors.addEventListener("click",function(){
    triceraptors.style.border = "5px solid red"
});

//---------------

let feathered = document.querySelector("#feathers");

feathered.addEventListener("click", function(){
    feathered.style.opacity = "0.5"
});
//---------------

let button = document.querySelector("#toggle");
let x = 1;
button.addEventListener("click",function(){
    let sectionRow = document.querySelector("#row");
    //// stretch goal
    if(x%2===1){ 
        sectionRow.style.background = "pink";
    }else{
        sectionRow.style.background = "none";
    }
    x++;
});


//---------------

let biggify = document.querySelector("#biggify");

function width200px(){
    biggify.style.width = "200px";
}
biggify.addEventListener("mouseover", width200px);

// ----- Stretch goal 
biggify.addEventListener("mouseout",function(){
   biggify.style.width = '162px';
})








