
//window.onload = countdown(10);

var myVar;
var clock = document.getElementById("countdownTimer");

function countdown(val)
{
   
   var counter=val;

   
   


    console.log(counter);
   myVar= setInterval(function()
   { 
    var ids = ["hourc", "minutesc", "secondsc"];

    let hours = Math.floor(counter / 3600);
    let minutes = Math.floor(counter % 3600 / 60);
    let seconds = Math.floor(counter % 3600 % 60);
    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var values = [hours, minutes, seconds];
     if(counter>=0)
     {
       //document.getElementById("countdownTimer").innerHTML=counter;
       document.getElementById("countdownTimer").innerHTML = `${hours}:${minutes}:${seconds}`;
       
       
       //for(var i = 0; i < ids.length; i++)
       //document.getElementById(ids[i]).firstChild.nodeValue = values[i];
     }
     if(counter<0)
     {
       //document.getElementById("countdownTimer").innerHTML="End";
       confetti.start();
     }
     
     counter--;		
   }, 1000)
 
 }

function set_count()
{
   //clearInterval(myVar);
   document.getElementById("countdownTimer").style.display = "flex";
   document.getElementById("input").style.display = "none";
   var secs=document.getElementById("sec").value;
   var min=document.getElementById("min").value;
   var hour=document.getElementById("hour").value;

   if(hour == "" || hour == " "){
    hour = 0;
    }

   if(min == "" || min == " "){
         min = 0;
     }
   
     if(secs == "" || secs == " "){
        secs = 0;
    }
   hour = hour * 3600;
   min = min * 60;
   secs = secs * 1;
   var time = hour + min + secs + 0;


   countdown(time);
}














// var min = document.getElementById("min").value;
// var sec = document.getElementById("sec").value;

// if(min == "" || min == " "){
//     min = 0;
// }
// //var csec = inputSec.nodeValue;
// var time = min * 60 + inputSec;

// var count = document.getElementById("countdownTimer");
// function starTime(val1, val2){
    
    
    
//     // if(inputSec == "" || inputSec == " "){
//     //     inputSec = 0;
//     // }
    
//     console.log(min);
    

   
//     setInterval(updateTimer, 1000)
    
// }
// function updateTimer(){
//    //const minutes = Math.floor(time/60);
//    //let seconds = time % 60;
//    console.log(sec);
//    var minutes = min;

//    var seconds = sec;
//    seconds = seconds < 10 ? '0' + seconds : seconds;
//    count.innerHTML = `${minutes}:${seconds}`;

    

    
//     //seconds = seconds < 10 ? '0' + seconds : seconds;
//     time--;
   
// }

// //var timer;





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