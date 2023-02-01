// JavaScript Document

//validation


function validate(){

	
	//username
	var username=document.forms["registration"]["fname"].value;
	var uRegExp=/[^0-9]/;
	
	//email
	var email=document.forms["registration"]["email_address"].value;
	var eRegExp=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
	
	
	if( uRegExp.test(username)==false){
		
		document.getElementById("usernameError").innerHTML="!Only letters are allowed";
			
		return false;
	
		}
		
	
	else if(eRegExp.test(email)==false){
		
		document.getElementById("emailError").innerHTML="!Invalid Email";
			
		return false;
	
		}

	}
	
