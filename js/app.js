//MAIN EVENTS - START
//This variables for taking information from our guests
let name;
name = document.querySelector("#myName");
name.innerHTML = prompt("Name?","Asım Can");

//This function for make a real time clock
function showtime(){
    let clock = new Date();
    clock = clock.toLocaleTimeString();
    document.querySelector("#myClock").innerHTML = clock;
    setTimeout(showtime , 1000);
}
//MAIN EVENTS - END