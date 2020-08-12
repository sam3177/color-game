var colors = generateRandonColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = randomize();
var colorName = document.getElementById("colorText");
var message = document.getElementById("tryAgain");
var hbg = document.getElementById("header");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
colorName.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", guess);
};
reset.addEventListener("click", restart);
easy.addEventListener("click", easyLevel);
hard.addEventListener("click", hardLevel); 
function guess(){
    var clickedColor = this.style.backgroundColor; 
    if(clickedColor === pickedColor){
        message.textContent = "CORRECT!";
        colorChange(pickedColor);
        hbg.style.backgroundColor = clickedColor;
        console.log("bravo, coaie!");
        reset.textContent = "PLAY AGAIN?";
    } else{
        console.log("nope!");
        this.style.backgroundColor = "#232323";
        message.textContent = "TRY AGAIN!";
    }
}
function colorChange(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    };
}
function randomize(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function restart(){
    console.log("reset");
    if(colors.length === 3){
        easyLevel();
    } else{
        hardLevel();
    }
};
function generateRandonColors(num){
    colorsArr = [];
    for(var i = 0; i < num; i++){
        colorsArr.push(randomColor())
    }
    return colorsArr;
}
function easyLevel(){
    colors = generateRandonColors(3);
    pickedColor = randomize();
    for(var i = 0; i < 3; i++){
        squares[i].style.backgroundColor = colors[i];
    };
    for(var i = 3; i < squares.length; i++){
        squares[i].style.display = "none";
    };
    headerReset();
    console.log("noob mode");
    easy.classList.add("selected");
    hard.classList.remove("selected");
}
function hardLevel(){
    colors = generateRandonColors(6);
    pickedColor = randomize();
    for(var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    };
    headerReset();
    console.log("motherfucker mode");
    easy.classList.remove("selected");
    hard.classList.add("selected");
}
function headerReset(){
    hbg.style.backgroundColor = "steelblue";
    message.textContent = "CAN YOU GUESS?";
    reset.textContent = "NEW COLORS";
    colorName.textContent = pickedColor;
}
function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}