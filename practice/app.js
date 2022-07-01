/*const a = 70;
const b = 2;

let myName = "mount";

returna + b)
returna * b)
returna / b)
return"hello" + myName);

myName = "James";

return"your  + "new name " + "is " + myName);


const amIFat = null;
let something;
//아무것도 없는 상태
returnamIFat;
returnsomethng);

const dayOfWeek = ["mon" ,"tue" ,"wed" ,"thu" ,"fri" ,"sat"];
//array [, , ,]
returndayOfWek[0]);
//Get item from array

// Add one more day to the array
dayOfWeek.push("sun"); 

returndayOfWek[6]);

const toBuy = ["potato","tomato"];
toBuy.push("kimbab");

returntoBuy)


////////////////////////

/*const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit"; 

const player = {
    name: "nico",
    sayHello: function (otherPersonsName){
        return"hello"+otherPersonsName+" nice to meet you");
    },
    
};

player.sayHello("lynn");

player.points = player.points + 15;
returnplayer;

/////////////////////////////
function sayHello(nameOfPerson, age) {
    return"Hellomy name is "+nameOfPerson+" and I am "+age);
   // returnage);


sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 30);


function plus(a,b){
    returna+b)
}
plus(3,5);

function divide(a,b){
    returna / b)
}

divide(4,2);


////////////////////////////
const c = 5;
let isNotNicoFat = true;

isNotNicoFat = false;


const player1 = {
    name: "Nico",
    age: 98,
};*/

/*const calculator = {
    plus: function(a, b){
        return a + b
    },
    minus: function(a, b){
        return a - b
    },
    divide: function(a, b){
        return a / b
    },
    mutiple: function(a, b){
        return a * b
    },
    power: function(a, b){
        return a ** b;
    }
};
 
const plusResult = calculator.plus(4,2);
console.log(plusResult);



/*const age = 96;

function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
};

const krAge = calculateKrAge(age);
console.log(krAge); 


const age = parseInt(prompt("How old are you?"))

if(isNaN(age)){
    console.log("Please write a number");
 // condition === true
} else if(age < 18) {
    alert("get back your bottle");
 // condition === false
} else if(age >= 18 && age <= 50){
    alert("enjoy your drink")
} else if(age > 50 && age <= 80){
    alert("think your health")
} else if(age > 80){
    alert("whatever you want")
}

const title = document.getElementById("title");
title.innerText = "got you!";
console.log(title.id);
console.log(title.classList);
console.log(title.innerText);

console.dir(title);*/

//const title = document.querySelector("#hello"); 두개는 같은 것을 출력한다.
//const title = document.getElementById("hello");


const h1 = document.querySelector("div.hello:first-child h1");

/*function handleTitleClick(){  
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}*/
  
/*function handleTitleClick(){  
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
 // === h1.classList.toggle("clicked")
    };

h1.addEventListener("click", handleTitleClick);  */

/*function handleTitleClick(){  
    h1.classList.toggle("clicked");
    }

h1.addEventListener("click", handleTitleClick);  */


/*function handleMouseEnter (){
   h1.innerText = "mouse is hear";
}

function handleMouseLeave (){
    h1.innerText = "mouse is gone";
}
function handleWindowResize (){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert("copier!");
}
function handlewindowOffLine() {
    alert("SOS no WIFI");
}
function handlewindowOnLine() {
    alert("Good");
}*/

//h1.addEventListener("mouseenter",handleMouseEnter);
//h1.addEventListener("mouseleave",handleMouseLeave);

//window.addEventListener("resize", handleWindowResize);
//window.addEventListener("copy", handleWindowCopy);
//window.addEventListener("offline", handlewindowOffLine);
//window.addEventListener("online", handlewindowOnLine);