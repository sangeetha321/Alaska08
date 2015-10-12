 function checkVal()
 {
   
 
  var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
   var email = document.getElementById("email").value;
     var mileage = document.getElementById("mileage").value; 
      var mileage_plan = document.getElementById("mileage_plan").value; 
      var dec_chk = document.getElementById("dec_chk").checked; 
      
    if (fname == "") {
        document.getElementById("divid2").style.backgroundColor="#ffffff";
       document.getElementById("divid2").innerHTML = " <h5><font color='#ff0000' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please input  First Name..!!</font></h5>";
        return false;
    } 
     if (lname == "") {
       document.getElementById("divid2").style.backgroundColor="#ffffff";
       document.getElementById("divid2").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Last Name..!!</font></h5>";
        return false;
    } 
    if (email == "") {
      document.getElementById("divid2").style.backgroundColor="#ffffff";
       document.getElementById("divid2").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Email..!!</font></h5>";
        return false;
    } 
    if (mileage == "") {
       document.getElementById("divid2").style.backgroundColor="#ffffff";
       document.getElementById("divid2").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Mileage ..!!</font></h5>";
        return false;
    } 

     if (mileage_plan == "") {
       document.getElementById("divid2").style.backgroundColor="#ffffff";
       document.getElementById("divid2").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Mileage Plans..!!</font></h5>";
        return false;
    } 
    if(dec_chk==false)
    {
      document.getElementById("divid2").style.backgroundColor="#ffffff";
       document.getElementById("divid2").innerHTML = " <h5><font color='#ff0000' align='center'>Please confirm age..!!</font></h5>";
        return false;
    }
    var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
            if (!regex.test(email)) {
               document.getElementById("divid2").style.backgroundColor="#ffffff";
       document.getElementById("divid2").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  valid email..!!</font></h5>";
                return false;
            }



    
}
function logVal()
{

    var mileage = document.getElementById("mileage").value;
   var email = document.getElementById("email").value; 
   if (email == "") {
      document.getElementById("divid2").style.backgroundColor="#ffffff";
       document.getElementById("divid2").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Email..!!</font></h5>";
        return false;
    } 
    if (mileage == "") {
       document.getElementById("divid2").style.backgroundColor="#ffffff";
       document.getElementById("divid2").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Mileage.!!</font></h5>";
        return false;
    } 
    var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
            if (!regex.test(email)) {
               document.getElementById("divid2").style.backgroundColor="#ffffff";
       document.getElementById("divid2").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  valid email..!!</font></h5>";
                return false;
            }
    
}
