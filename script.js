
let batu = document.getElementById("batu");
let gunting = document.getElementById("gunting");
let kertas = document.getElementById("kertas");
let computer = document.getElementById("computer-choice");
let options = ["batu", "gunting", "kertas"];

batu.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 3);
    let randomOption = options[random];
    computer.innerHTML = randomOption;

    setTimeout(() => {
        switch (randomOption) {
            case "batu":
                alert("Draw");
                break;
    
            case "gunting":
                alert("Win!");
                break;
    
            default:
                alert("Lose");
                break;
        }
    }, 300);
})

gunting.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 3);
    let randomOption = options[random];
    computer.innerHTML = randomOption;

    setTimeout(() => {
        switch (randomOption) {
            case "batu":
                alert("Lose");
                break;
    
            case "gunting":
                alert("Draw");
                break;
    
            default:
                alert("Win!");
                break;
        }
    }, 300);
})

kertas.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 3);
    let randomOption = options[random];
    computer.innerHTML = randomOption;

    setTimeout(() => {
        switch (randomOption) {
            case "batu":
                alert("Win!");
                break;
    
            case "gunting":
                alert("Lose");
                break;
    
            default:
                alert("Draw");
                break;
        }
    }, 300);
})