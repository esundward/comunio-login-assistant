self.port.on("logindata",function(username,password){
	try{
		document.forms.login.getElementsByClassName('userlogin')[0].value=username;
		document.forms.login.getElementsByClassName('userlogin')[1].value=password;
		document.forms.login.submit();
	}
	catch(err){
		self.port.emit('loginyes');
	}
});