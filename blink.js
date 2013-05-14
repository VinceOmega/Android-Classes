//Fuckin contruction an Object, Methods...and Pylons.

function mailMan(Lname, Fname, Numba, Email, Street, Zip, Directions){

//Dem Props
this.Lname = Lname;
this.Fname = Fname;
this.Numba = Numba;
this.Email = Email;
this.Street = Street;
this.Zip = Zip;
this.Directions = Directions;


//Dem Methods
this.newLname= newLname;
this.newFname= newFname;
this.newNumba= newNumba;
this.newEmail= newEmail;
this.newStreet = newStreet;
this.newZip = newZip;
this.newDirections = newDirections;

}

//Define Dem Mehtods my Nig. Naw Meen.
function newLname(datLname){

this.Lname = datLname;

}

function newFname(datFname){

this.Fname = datFname;

}

function newNumba(datNumba){

this.Numba = datNumba;

}

function newEmail(datEmail){

this.Email = datEmail;

}

function newStreet(datStreet){

this.Street = datStreet;

}

function newZip(datZip){

this.Zip = datZip;

}

function newDirections(datDirections){

this.Directions = datDirections;

}
//End contruction

var mail = new mailMan();

//Dat Google Map Son


var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var stepDisplay;
var markerArray = [];


function initialize() {

var Philadelphia = new google.maps.LatLng(39.9523, -75.1638);
        var myOptions = {         
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
		  center:Philadelphia
        }
        map = new google.maps.Map(document.getElementById("map"),
            myOptions);
			
			var rendererOptions = {
			map: map
	}
			
		 directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions)
		 stepDisplay = new google.maps.InfoWindow();
      }
	  
function calcRoute() {
 //clear markers
 for (i = 0; i < markerArray.length; i++) {
    markerArray[i].setMap(null);
  }
 

  var start = mail.Street + mail.Zip;
  var end = "4640 Roosevelt Blvd Philadelphia, PA";
  var request = {
    origin:start,
    destination:end,
    travelMode: google.maps.TravelMode.DRIVING
  } ;
  
   // Route the directions and pass the response to a
  // function to create markers for each step.
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      //var warnings = document.getElementById("warning_panel");
     // warnings.innerHTML = "" + response.routes[0].warnings + "";
      directionsDisplay.setDirections(response);
      showSteps(response);
    }
  });
}

function showSteps(directionResult) {
  // For each step, place a marker, and add the text to the marker's
  // info window. Also attach the marker to an array so we
  // can keep track of it and remove it when calculating new
  // routes.
  var myRoute = directionResult.routes[0].legs[0];
  
 var dir;
  for (var i = 0; i < myRoute.steps.length; i++) {
      var marker = new google.maps.Marker({
        position: myRoute.steps[i].start_point,
        map: map
		
      });
      attachInstructionText(marker, myRoute.steps[i].instructions);
	  dir += myRoute.steps[i].instructions + "<br/>";
      markerArray[i] = marker;
  }
  mail.newDirections(dir);
}

function attachInstructionText(marker, text) {
  google.maps.event.addListener(marker, 'click', function() {
    stepDisplay.setContent(text);
    stepDisplay.open(map, marker);
  });
}


var baseTabs = ['body','what_android','dem_classes', 'print'];

function clickTabs(IDS){
  for (var i=0; i<baseTabs.length; i++) {
    document.getElementById(baseTabs[i]).style.display = 'none';
  }
  document.getElementById(IDS).style.display = 'block';
}

function call(url){

 
        ajaxObject = false;
 
    if (window.XMLHttpRequest) { // if we're on Gecko (Firefox etc.), KHTML/WebKit (Safari/Konqueror) and IE7
       
        ajaxObject = new XMLHttpRequest(); 
 
        if (ajaxObject.overrideMimeType) { // older Mozilla-based browsers
            ajaxObject.overrideMimeType('text/xml');
        }
   
       
    }
    else if (window.ActiveXObject) { // and now for IE6
            try {// IE6 has two methods of calling the object, typical!
 
            ajaxObject = new ActiveXObject("Msxml2.XMLHTTP");
            // create the ActiveX control
 
 
        } catch (e) { // catch the error if creation fails
 
            try { // try something else
 
            ajaxObject = new ActiveXObject("Microsoft.XMLHTTP");
            // create the ActiveX control (using older XML library)
 
 
            } catch (e) {} // catch the error if creation fails
        }
    }
 
        if (!ajaxObject) { // if the object doesn't work
 
            // for some reason it hasn't worked, so show an error
 
        alert('Sorry, your browser seems to not support this functionality.');
 
        return false; // exit out of this function
        }
 
   
        ajaxObject.onreadystatechange = ajaxResponse;
 
    // DO NOT ADD THE () AT THE END, NO PARAMETERS ALLOWED!
 
    ajaxObject.open('POST', url, true); // open the query to the server
 

		ajaxObject.setRequestHeader("Content-type","application/x-www-form-urlencoded"); //define content type
		//ajaxObject.setRequestHeader("Connection", "close");
        ajaxObject.send("LName="+mail.Lname+"&FName="+mail.Fname+"&Numba="+mail.Numba+"&Email="+mail.Email); // close the query and send the info.
		
 
    // and now we wait until the readystate changes, at which point
    // ajaxResponse(); is executed
 
    return true;
 
    } // end function doAjaxQuery
 
function ajaxResponse() { // this function will handle the processing
 
    // N.B. - in making your own functions like this, please note
    // that you cannot have ANY PARAMETERS for this type of function!!
   
    if (ajaxObject.readyState == 4) { // if ready state is 4 (the page is finished loading)
 
        if (ajaxObject.status == 200) { // if the status code is 200 (everything's OK)
 
            // here is where we will do the processing
 
            if(ajaxObject.responseText == 1) { // if the result is 1
				var p, np, text, print, br;
				br =document.createElement('br');
				p = document.getElementById('flavor');
				np = document.createElement('p');
				print = document.createElement('input');
				print.setAttribute("class", "button");
				print.setAttribute("type","button");
				print.setAttribute("value","print directions");
				print.setAttribute("onclick","clickTabs('print')");
				//print.setAttribute("onclick","printDirections()");
				text = document.createTextNode("Congrats, you just sent an email to the Mobile Center!");
				np.appendChild(text);
				np.appendChild(br);
				np.appendChild(print);
				//p.appendChild(np);
				p.replaceChild(np, p.firstChild);
				printDirections();
            }
 
            else { // otherwise
				
				
                //alert(mail.Lname+","+mail.Fname+","+mail.Numba+","+mail.Email+",");
 
            }
 
        } // end if
 
        else { // if the status code is anything else (bad news)
 
            alert('There was an error. HTTP error code ' + ajaxObject.status.toString() + '.');
            return; // exit
 
        }
 
    } // end if
 
    // if the ready state isn't 4, we don't do anything, just
    // wait until it is...
 
 
} // end function ajaxResponse

/*End Ajax*/

/*Print page and Regex shit son, nah meen my zigger*/
var dp;
var ndp;
var pat;
var dprint = document.createElement('input');
ndp = document.createElement('p');
var dtext;



function printDirections(){
dp = document.getElementById('directions');
dprint.setAttribute("type","button");
dprint.setAttribute("value","print");
dprint.setAttribute("class", "button");
//dtext = document.createTextNode(" " + mail.Directions.replace(/^(undefined)[^H]^(\b<b>\b)^(\b<\/b>\b)*/ig,"" + "\n") + "\n");
//dtext.replace("[<b|B>]+[<\\b|B>]+", " ");
dprint.setAttribute("onclick","window.print()");
//ndp.appendChild(dtext);
//ndp.appendChild(dprint);
//dp.replaceChild(ndp, dp.firstChild);
dp.innerHTML = mail.Directions.replace("undefinedHead", "Head");
//dp.appendChild(dtext);
dp.appendChild(dprint);

if(document.all){
 return dp.innerText;
}

else {
 return dp.textContent;
}

}
 
//dp.addEventListener("currentTarget", printDirections, false);