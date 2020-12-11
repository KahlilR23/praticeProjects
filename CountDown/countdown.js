window.onload = countdown(10);

   var myVar;
   function countdown(val)
   {
	  var counter=val;
	
	  myVar= setInterval(function()
	  { 
	    if(counter>=0)
		{
		  document.getElementById("countdown").innerHTML=counter;
		}
	    if(counter<0)
		{
		  document.getElementById("countdown").innerHTML="End";
		  
		}
		
		counter--;		
	  }, 1000)
	
    }

   function set_count()
   {
	  clearInterval(myVar);
	  var count_val=document.getElementById("counter_val").value;
	  countdown(count_val);
   }