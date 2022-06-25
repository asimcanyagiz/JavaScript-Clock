//MAIN EVENTS - START
//This variables for taking information from our guests
let name;
name = document.querySelector("#myName");
name.innerHTML = prompt("Name?","Asım Can");

//This function for make a real time clock
function showTime(){
    let clock = new Date();
    clock = clock.toLocaleTimeString();
    document.querySelector("#myClock").innerHTML = clock;
    setTimeout(showTime , 1000);
}
//MAIN EVENTS - END

//BODY EVENTS - START
const time = new Date();
let background = 
(time.getHours() >= 5 && time.getHours() < 12) ? document.body.style.backgroundImage = "url('/media/morning.jpg')" :
(time.getHours() >= 12 && time.getHours() < 17) ? document.body.style.backgroundImage = "url('/media/afternoon.jpg')" :
(time.getHours() >= 17 && time.getHours() < 21) ? document.body.style.backgroundImage = "url('/media/evening.jpg')" :
(time.getHours() >= 21 || time.getHours() < 5) ? document.body.style.backgroundImage = "url('/media/night.jpg')" :
"";
//BODY EVENTS - END

//ESSENTIALS - START
//This value for giving information parts of the day with allusion
let partsOfDay =
(time.getHours() >= 5 && time.getHours() < 12) ? document.querySelector("#dayPart").innerHTML = "I wish there were more than 24 hours":
(time.getHours() >= 12 && time.getHours() < 17) ? document.querySelector("#dayPart").innerHTML = "Work hard, play hard":
(time.getHours() >= 17 && time.getHours() < 21) ? document.querySelector("#dayPart").innerHTML = "Time to gossip and drink beer on a local pub mate!":
(time.getHours() >= 21 || time.getHours() < 5) ? document.querySelector("#dayPart").innerHTML = "Sure grandma let's get you to bed":
"";

//This value for change color of time because visibility
let reverseColorsClock=
(time.getHours() >= 5 && time.getHours() < 12) ? document.querySelector(".clock").style.color = "white":
"";

//this value for giving information of credits about images
let creditImages = 
(time.getHours() >= 5 && time.getHours() < 12) ? document.querySelector("#credits").innerHTML = `<a href="https://www.freepik.com/vectors/sunset-clouds">Sunset clouds vector created by vectorpouch - www.freepik.com</a>`:
(time.getHours() >= 12 && time.getHours() < 17) ? document.querySelector("#credits").innerHTML = `<a href='https://www.freepik.com/vectors/bay'>Bay vector created by upklyak - www.freepik.com</a>`:
(time.getHours() >= 17 && time.getHours() < 21) ? document.querySelector("#credits").innerHTML = `<a href='https://www.freepik.com/vectors/fluffy-clouds'>Fluffy clouds vector created by macrovector - www.freepik.com</a>`:
(time.getHours() >= 21 || time.getHours() < 5) ? document.querySelector("#credits").innerHTML = `<a href='https://www.freepik.com/vectors/rural-landscape'>Rural landscape vector created by upklyak - www.freepik.com</a>`:
"";
//ESSENTIALS - END