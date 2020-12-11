var inputMin = document.getElementById("min").value;
var inputSec = document.getElementById("sec").value;

if(inputMin == "" || inputMin == " " ){
    inputMin = 0;
}
if(inputSec == "" || inputSec == " "){
    inputSec = 0;
}

let time = inputMin * 60 + inputSec;

let count = document.getElementById("countdownTimer");

console.log(inputMin);
console.log(inputSec);


function starTime(){
    while(time > 0){
    setInterval(updateTimer, 1000)
    }
}
function updateTimer(){
   // const minutes = Math.floor(time/60);
   // let seconds = time % 60;
   while (time > 0){
   var minutes = inputMin;
   var seconds = inputSec;
   seconds = seconds < 10 ? '0' + seconds : seconds;
   count.innerHTML = `${minutes}:${seconds}`;

    

    
    //seconds = seconds < 10 ? '0' + seconds : seconds;
    time--;
   }
}

var timer;





// var timer;
// function settimer()
// {
//  clearInterval(timer);

// //  var timer_month=document.getElementById("month").value;
// //  var timer_day=document.getElementById("day").value;
// //  var timer_year=document.getElementById("year").value;
// //  var timer_hour=document.getElementById("hour").value;
// //  if(timer_hour=="")timer_hour=0;
//  var timer_min=document.getElementById("min").value;
//  if(timer_min=="")timer_min=0;

//  //var timer_date=timer_month+"/"+timer_day+"/"+timer_year+" "+timer_hour+":"+timer_min;
//  var timer_date=timer_min;
//  var end = new Date(timer_date); // Arrange values in Date Time Format
//  //var now = new Date(); // Get Current date time
//  var second = 1000; // Total Millisecond In One Sec
//  var minute = second * 60; // Total Sec In One Min
//  var hour = minute * 60; // Total Min In One Hour
//  var day = hour * 24; // Total Hour In One Day

//  function showtimer() {
//   var now = new Date();
//   var remain = end - now; // Get The Difference Between Current and entered date time
//   var remain = end;
//   if(remain < 0) 
//   {
//    clearInterval(timer);
//    document.getElementById("timer_value").innerHTML = 'Reached!';
//    return;
//   }
//   var days = Math.floor(remain / day); // Get Remaining Days
//   var hours = Math.floor((remain % day) / hour); // Get Remaining Hours
//   var minutes = Math.floor((remain % hour) / minute); // Get Remaining Min
//   var seconds = Math.floor((remain % minute) / second); // Get Remaining Sec
 
//   document.getElementById("timer_value").innerHTML = days + 'Days ';
//   document.getElementById("timer_value").innerHTML += hours + 'Hrs ';
//   document.getElementById("timer_value").innerHTML += minutes + 'Mins ';
//   document.getElementById("timer_value").innerHTML += seconds + 'Secs';
//  }
//  timer = setInterval(showtimer, 1000); // Display Timer In Every 1 Sec
// }