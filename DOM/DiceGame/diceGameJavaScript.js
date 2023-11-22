//for dice1
var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice"+randomnumber1+ ".png";

var randomImageSource = "images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


//for dice2
var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice"+randomnumber2+ ".png";

var randomImageSource2 = "images/"+randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

if (randomnumber1>randomnumber2){
    document.querySelectorAll("h1")[1].innerHTML = "🚩 Player 1 Won!!!";

}

else if(randomnumber1<randomnumber2){
    document.querySelectorAll("h1")[1].innerHTML = "Player 2 Won!!! 🚩";
}

else{
    document.querySelectorAll("h1")[1].innerHTML = "Draw!!!";
    
}