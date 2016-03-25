function validateForm(){
	/* Loop through fields with the class of "req" */
	for (var i = 0; i < Personalform.elements.length; i++) {
        if (Personalform.elements[i].className == "req" && Personalform.elements[i].value.length == 0) {
            alert('Please fill in all required fields, denoted by a *');
            return false;
        }
    }
	
	/* Make sure the email value is a valid email address */
	var email  = document.getElementById('email').value;
	var atpos  = email.indexOf("@");
	var dotpos = email.lastIndexOf(".");
	if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= x.length){
  		alert('Please use a valid email address');
        return false;
  }
}