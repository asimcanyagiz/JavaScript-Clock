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

