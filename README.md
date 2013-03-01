508validate
========

Aria Form Validation
508Validate - copyright (c) Justin Rings 2013
Licensed under MIT (LICENSE)

How to use
 
A simple Form Validating Library

It uses the aria-invalid attribute to validate for 508 complaince 
You can set your own CSS to make the fields pop out to the user

I use the aria-invalid property as my CSS selector:

 input[aria-invalid="true"]
 { 
   CSS STUFF 
 }

use it: 
   check.text('id') - Validates that there is text in the field...its pretty forgiving
   check.email('id') - validates that there is a gormat of atleast => a@b.com (RegEx)
   check.url('id') - validates that string in standatd url format => a.com (RegEx)
 
