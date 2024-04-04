let col1Buttons = document.querySelectorAll(".col1");
let col2Buttons = document.querySelectorAll(".col2");
let col3Buttons = document.querySelectorAll(".col3");
let screen = document.querySelector(".screen");
let operators = document.querySelectorAll(".operators");


screen.style.fontSize = "30px";
screen.style.textAlign = "center";
screen.style.lineHeight = "5rem";

let val1, val2, symbol;

col1Buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.innerText == "C"){
            nullScreen();
        }
        else{
            screen.innerText += button.innerText;
        }
    });
});
function nullScreen(){
    screen.innerText="";
}
col2Buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.innerText == "%"){
            val1 = screen.innerText;
            symbol = "%";
            nullScreen();
            val1 = Number(val1);
            screen.innerText = val1/100;
        }
        else{
            screen.innerText += button.innerText;
        }
    });
});
col3Buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.innerText == "Del"){
            let str = screen.innerText;
            screen.innerText = str.substring(0, str.length - 1);
        }
        else{
            screen.innerText += button.innerText;
        }
    });
});

operators.forEach(button => {
    button.addEventListener("click", () => {
        if(button.innerText == "+"){
            val1 = screen.innerText;
            symbol = "+";
            nullScreen();
        }
        else if(button.innerText == "-"){
            val1 = screen.innerText;
            symbol = "-";
            nullScreen();
        }
        else if(button.innerText == "x"){
            val1 = screen.innerText;
            symbol = "x";
            nullScreen();
        }
        else if(button.innerText == "/"){
            val1 = screen.innerText;
            symbol = "/";
            nullScreen();
        }
        else if(button.innerText == "="){
            val2 = screen.innerText;
            calculate(val1,val2,symbol);
        }
    });
});
function calculate(val1, val2, symbol){
    let result;
    val1 = Number(val1);
    val2 = Number(val2);
    if(symbol == "+"){
        result = val1 + val2;
        screen.innerText = result;
    }
    else if(symbol == "-"){
        result = val1 - val2;
        screen.innerText = result;
    }
    else if(symbol == "x"){
        result = val1 * val2;
        screen.innerText = result;
    }
    else if(symbol == "/"){
        result = val1 / val2;
        screen.innerText = result;
    }
}
