(function (window) {
var names = ["Sarita", "Joe", "Jeny", "Alok", "Priya", "Ashu", "Lovely", "Paul", "Jiya", "shantanu"];
for (var i in names) {
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();
  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);