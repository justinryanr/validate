/*
 * 
 * 508 Validate
 * 
 * A simple Form Validating Library
 * 
 * It uses the aria-invalid attribute to validate for 508 complaince 
 * YOu can set your own CSS to make the fields pop out to the user
 * 
 * use it: check.validate('id','type(see below)')
 * 
 * Type:
 *   url - validates that string in standatd url format (RegEx)
 *   email - validates that there is a gormat of atleast => a@b.c (RegEx)
 *   text - Validates that there is text in the field...its pretty forgiving
 * 
 */


var check = function(){
  
	var emailPat = /^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$/;
	var urlPat = /^(http[s]?:\/\/)?([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2}(\/([-~%\.\(\)\w\d]*\/*)*(#[-\w\d]+)?)?$/;
	var val;
	
  return{
    validate: function(id, type){
     	        this.elem = document.getElementById(id);
			   if(type == 'text')
			   	this.elem.addEventListener('change',function(){valText(this)},false);
			   if(type == 'email')
			   	this.elem.addEventListener('change',function(){valEmail(this)},false);
		       if(type == 'url')
		   	    this.elem.addEventListener('change',function(){valUrl(this)},false);
    	
              }
  }

	function isBlank(e){
		    val = e.value
			if(val == null || val.length == 0)
			return /\S/.test(e);
			return false;
	}
	
	function valText (field){
	    if(isBlank(field)){
			field.setAttribute('aria-invalid', 'true');
		}else{
			field.setAttribute('aria-invalid', 'false');
		}
	}
	
	function valEmail(field){
		if(!isBlank(field))
		{
			if(emailPat.test(field.value)){
				field.setAttribute('aria-invalid', 'false');
			}else{
				field.setAttribute('aria-invalid', 'true');
			}
		}else{
			alert("Field is Blank");
		}
	}
	
	function valUrl(field){	
		if(!isBlank(field))
		{
			if(urlPat.test(field.value)){
				field.setAttribute('aria-invalid', 'false');
			}else{
				field.setAttribute('aria-invalid', 'true');
			}
		}else{
			field.setAttribute('aria-invalid', 'true');
		}
	}

}();
