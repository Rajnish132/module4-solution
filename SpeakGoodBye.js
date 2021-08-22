(function(window) {
	var speakWord = "Good Bye";
	var byeSpeaker = function speak(name) {
 	if(name.charAt(0) == "J" && name.charAt(0) == "j" )
  		console.log(speakWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker("Rajnish");
})(window);
