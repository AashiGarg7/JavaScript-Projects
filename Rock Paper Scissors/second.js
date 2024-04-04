let rock = document.querySelector(".element1"); 
let paper = document.querySelector(".element2"); 
let scissors = document.querySelector(".element3"); 
let result = document.querySelector(".move");
let i=0, j=0;

//events and functions
rock.addEventListener("click", ()=> {
    // console.log("rock");
    let x=1;
    computerPlay(x);
});
paper.addEventListener("click", ()=> {
    // console.log("paper");
    let x=2;
    computerPlay(x);
});
scissors.addEventListener("click", ()=> {
    // console.log("scissors");
    let x=3;
    computerPlay(x);
});

function computerPlay(x){
    let element = Math.floor(Math.random()*3);
    switch(element){
        case 1:
            console.log("rock");
            selectWinner(x,"rock");
            break;
        case 2:
            console.log("paper");
            selectWinner(x,"paper");
            break;
        case 3:
            console.log("scissors");
            selectWinner(x,"scissors");
            break;
    }
}
function selectWinner(x,y){
    if(x==1 && y=="rock"){
        // console.log("Tie");
        result.innerText = "Tie";
        calculateScore("Tie");
    }
    else if(x==1 && y=="paper"){
        // console.log("You lost");
        result.innerText = "You Lost";
        calculateScore("You Lost");
    }
    else if(x==1 && y=="scissors"){
        // console.log("You won");
        result.innerText = "You Won";
        calculateScore("You Won");
    }
    if(x==2 && y=="rock"){
        // console.log("You won");
        result.innerText = "You Won";
        calculateScore("You Won");
    }
    else if(x==2 && y=="paper"){
        // console.log("Tie");
        result.innerText = "Tie";
        calculateScore("Tie");
    }
    else if(x==2 && y=="scissors"){
        // console.log("You lost");
        result.innerText = "You Lost";
        calculateScore("You Lost");
    }
    if(x==3 && y=="rock"){
        // console.log("You lost");
        result.innerText = "You Lost";
        calculateScore("You Lost");
    }
    else if(x==3 && y=="paper"){
        // console.log("You won");
        result.innerText = "You Won";
        calculateScore("You Won");
    }
    else if(x==3 && y=="scissors"){
        // console.log("Tie");
        result.innerText = "Tie";
        calculateScore("Tie");
    }
    function calculateScore(z){
        if(z=="You Won"){
            result.style.backgroundColor = "green";
            i++;
            document.querySelector(".S1").innerText = i;
            console.log(i);
        }
        else if(z=="You Lost"){
            result.style.backgroundColor = "crimson";
            i++;
            j++;
            document.querySelector(".S2").innerText = j;
            console.log(j);
        }
        if(z=="Tie"){
            result.style.backgroundColor = "yellow";
            result.style.color = "black";
        }
    }
}