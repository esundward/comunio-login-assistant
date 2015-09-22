var self = require('sdk/self');

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
// 
var tabsmodul= require("sdk/tabs");
var buttons = require('sdk/ui/button/action');
var prefsmodul= require("sdk/simple-prefs");
var passwordmodul=require("sdk/passwords");
var pagemodmodul = require("sdk/page-mod");


var username
var password
var clicktoggle=false

//addon icon
var button = buttons.ActionButton({
	  id: "comunio-assistant",
	    label: "comunio login",
	      icon: {
		          "16": "./icon-16-1.png",
			      "32": "./icon-32-1.png",
			      "64": "./icon-64-1.png",
					    },
	        onClick: handleClick
});
//auto login
pagemodmodul.PageMod({
	include: ["http://www.comunio.de","http://www.comunio.de/","htpps://www.comunio.de/login.phtml","http://www.classic.comunio.de/login.phtml","https://classic.comunio.de/login.phtml"],
	contentScriptWhen: "ready",
	contentScriptFile: "./my-script.js",
	attachTo: "top",
	onAttach: function onAttach(worker,state) {
		worker.tab.on("close",defaulticon);
		worker.port.on("loginyes",function alreadyin(){ 
				greenicon(state);
				if (prefsmodul.prefs.activatetab=="activateyes"){
					worker.tab.activate();
				}
		});
		if (prefsmodul.prefs.autologin=="autologinyes"||clicktoggle){
			clicktoggle=false
			yellowicon(worker.tab,state);			
			login(worker);
		}
	}
});
// when login sucesfull change icon to green
pagemodmodul.PageMod({
	include: "http://www.comunio.de/team_news.phtml",
	contentScriptWhen: "ready",
	contentScript: "",
	attachTo: "top",
	onAttach: function onAttach(wworker,state) {
				greenicon(state);
				if (prefsmodul.prefs.activatetab=="activateyes"){
					wworker.tab.activate();
				}
				wworker.tab.on("close",defaulticon);
			}
});
// calculate account balance
pagemodmodul.PageMod({
	include: "http://www.comunio.de/exchangemarket.phtml?viewoffers_x=*",
	contentScriptWhen: "ready",
	contentScriptFile: self.data.url("accountbalance.js"),
	attachTo: "top",
});
// highlight exchangemarket
pagemodmodul.PageMod({
	include: "http://www.comunio.de/exchangemarket.phtml",
	contentScriptWhen: "end",
	//attachTo: "existing",
	contentScriptFile: self.data.url("exchangemarket2.js"),
	contentStyleFile: "./style.css",
});

// action for icon click
function handleClick(state) {
	backgroundtoggle=true
	if (prefsmodul.prefs.background=="backgroundno"){
		backgroundtoggle=false
	}
	tabsmodul.open({ url: "http://www.comunio.de/", inBackground: backgroundtoggle });
	clicktoggle=true;
} 

// change icon
function defaulticon(state) {
	button.icon="./icon-16-1.png"
}
function greenicon(state) {
	button.icon="./icon-16-1-g.png"
}
function yellowicon(state) {
	button.icon="./icon-16-1-y.png"
}
// login process
function login(worker){
		// check if username and password is stored inside passwordmanager
		if (prefsmodul.prefs.passwordmanager=="manager"){
			passwordmodul.search({
				url: "http://www.comunio.de",
				onComplete: function onComplete(credentials){
					credentials.forEach(function(credential){
					username=credential.username;
					password=credential.password;
					});
					worker.port.emit("logindata", username,password);
				}
			});
			
		}
		// use username and password form properties of the addon
		else{
			username=prefsmodul.prefs.username;
			password=prefsmodul.prefs.password;
			worker.port.emit("logindata", username,password);
		}
	
}

