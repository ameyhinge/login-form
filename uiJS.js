document.addEventListener("DOMContentLoaded", function() {
	
	//get user and pass labels
	var uplabels=[];
	var inputWrap=[];
	var inputBox=[];
	
	uplabels=document.getElementsByClassName("input-label");
	inputWrap=document.getElementsByClassName("input-wrap");
	inputBox=document.getElementsByClassName("input-box");
	
	
	//Focus text box on CLICK
	document.getElementById("uname").addEventListener("click", function() {
		inputBox[0].focus();
	});
	document.getElementById("pass").addEventListener("click", function() {
		inputBox[1].focus();
	});
	
	//Highlight on FOCUS
	document.getElementById("uname").addEventListener("focus", function() {
		uplabels[0].style.paddingTop="0.6rem";
		uplabels[0].style.fontSize="0.8rem";
		uplabels[0].style.color="teal";
		inputWrap[0].style.width="100%";
	});
	document.getElementById("pass").addEventListener("focus", function() {
		uplabels[1].style.paddingTop="0.6rem";
		uplabels[1].style.fontSize="0.8rem";
		uplabels[1].style.color="teal";
		inputWrap[1].style.width="100%";
	});
	
	//REMOVE highlight on FOCUSOUT
	document.getElementById("uname").addEventListener("focusout", function(){
		if(inputBox[0].value==null || inputBox[0].value.trim()==''){
			uplabels[0].style.paddingTop="2rem";
			uplabels[0].style.fontSize="0.9rem";
			uplabels[0].style.color="rgb(100,100,100)";
			inputWrap[0].style.width="0%";
		}
		else if(inputBox[0].value=="ameyhinge@gmail.com"){
			var userString=document.getElementsByClassName('user-string')[0];
			userString.innerHTML="Welcome, Amey";
			userString.style.fontSize="1.4rem";
			userString.style.textDecoration="none";
			userString.removeAttribute('href');
		}		
	});
	document.getElementById("pass").addEventListener("focusout", function(){
		if(inputBox[1].value==null || inputBox[1].value.trim()==''){
			uplabels[1].style.paddingTop="2rem";
			uplabels[1].style.fontSize="0.9rem";
			uplabels[1].style.color="rgb(100,100,100)";
			inputWrap[1].style.width="0%";
		}
	});
	
	//Initial Setup
	inputBox[0].focus();
	
});