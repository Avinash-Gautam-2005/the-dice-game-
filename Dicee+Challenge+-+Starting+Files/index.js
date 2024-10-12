let randomNumber1=Math.floor(Math.random()*6)+1
let randomDiceImage="images/dice" + randomNumber1 + ".png";
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);




let randomNumber2=Math.floor(Math.random()*6)+1;
let randomDiceImage2="images/dice" + randomNumber2 + ".png";
let image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);



let h1=document.querySelector("h1");
if(randomNumber1>randomNumber2){
    h1.innerHTML=" Player1 Wins !";
}else if(randomNumber1<randomNumber2){
    h1.innerHTML="Player2 Wins !";
}else{
    h1.innerHTML="Match Ties!";
}