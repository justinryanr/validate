/*
 * 
 * 508 Validate
 * 
 * A simple Form Validating Library
 * 
 * It uses the aria-invalid attribute to validate for 508 complaince 
 * YOu can set your own CSS to make the fields pop out to the user
 * 
 * use it: 
 *   check.text('id') - Validates that there is text in the field...its pretty forgiving
 *   check.email('id') - validates that there is a gormat of atleast => a@b.com (RegEx)
 *   check.url('id') - validates that string in standatd url format => a.com (RegEx)
 * 
 */

(function(){
	
	var emailPat = /^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$/;
	var urlPat = /^(http[s]?:\/\/)?([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2}(\/([-~%\.\(\)\w\d]*\/*)*(#[-\w\d]+)?)?$/;
	var datePat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
	var val;
	
	window.check = {
	    text:  function(id){
	    	        this.elem = document.getElementById(id);
				   	this.elem.addEventListener('change',function(){valText(this)},false);
	           },
	          
	    email: function(id){
	    	        this.elem = document.getElementById(id);
				   	this.elem.addEventListener('change',function(){valEmail(this)},false);      
	           },
	             
	    url:   function(id){
	    	        this.elem = document.getElementById(id);
			   	    this.elem.addEventListener('change',function(){valUrl(this)},false);
	          },
	    date:  function(id){
	    	        this.elem = document.getElementById(id);
			   	    this.elem.addEventListener('change',function(){valDate(this)},false);
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
				field.setAttribute('aria-invalid', 'true');
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
		
		function valDate(field){	
			if(!isBlank(field))
			{
				if(datePat.test(field.value)){
					field.setAttribute('aria-invalid', 'false');
				}else{
					field.setAttribute('aria-invalid', 'true');
				}
			}else{
				field.setAttribute('aria-invalid', 'true');
			}
		}
	
	}
)();
