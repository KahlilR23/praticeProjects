window.onload = setInterval(clock,1000);

    function clock()
    {
	  var d = new Date();
	  
	  var date = d.getDate();
	  
	  var month = d.getMonth();
	  var montharr =["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
	  month=montharr[month];
	  
	  var year = d.getFullYear();
	  
	  var day = d.getDay();
	  var dayarr =["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
	  day=dayarr[day];
	  
	  var hour =d.getHours();
      var min = d.getMinutes();
      var sec = d.getSeconds();
      
      var ampm = "AM";
            if( hour > 12 ) {
                hour -= 12;
                ampm = "PM";
            }
	
	  document.getElementById("date").innerHTML=day+" "+month+" "+date+" "+year;
	  document.getElementById("time").innerHTML=hour+":"+min+":"+sec+""+ampm;
    }