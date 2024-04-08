jQuery('#frm').validate({
	rules:{
		name:"required",
		email:{
			required:true,
			email:true
		},
		password:{
			required:true,
			minlength:5
		
		},
        confirm_password: {
            required: true,
            equalTo: "#password"
        }
	},messages:{
		name:"Please enter your name",
		email:{
			required:"Please enter email",
			email:"Please enter valid email",
		},
		password:{
			required:"Please enter your password",
			minlength:"Password must be 5 char long"
		},confirm_password: {
            required:"Please enter your password",
            equalTo: "Your Password Not Match "
        }
	},
	submitHandler:function(form){
		form.submit();
	}
});
