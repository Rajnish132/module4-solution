(function(window) {
	var speakWord = "Hello";
	var helloSpeaker = function speak(name) {
 	if(name.charAt(0) != "J" && name.charAt(0) != "j" )
  		console.log(speakWord + " " + name);
	}
	window.helloSpeaker = helloSpeaker("Rajnish");
})(window);
