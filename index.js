var randomnumber1 = Math.floor(Math.random()*6) + 1;    // + 1 to have a number between 1 and 6 rather than 0 and 5

var randomdiceimage = "dice" + randomnumber1 + ".png";     // RANDOM DICE FROM THE DICE IMAGES

var randomimagesource = "images/" + randomdiceimage;    // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];  // [0] to get the first image (array)

image1.setAttribute("src",randomimagesource);    // setAttribute ("what to change", what to change it to)




var randomnumber2 = Math.floor(Math.random()*6) + 1;   

var randomdiceimage2 = "dice" + randomnumber2 + ".png";    

var randomimagesource2 = "images/" + randomdiceimage2;    

var image1 = document.querySelectorAll("img")[1];  

image1.setAttribute("src",randomimagesource2);   


if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 WINS!";
}

else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML = "Player 2 WINS!";
}

else{
    document.querySelector("h1").innerHTML = "Draw!";
}