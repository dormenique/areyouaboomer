function theYear(){
  
var year = document.getElementById("birthyear").value;
var yearsOld = 2021 - year;

        if (year <= 1945) {
        generation = "Baby Boomer";
      } else if (year <= 1964) {
        generation = "BOOMER";
      } else if (year <= 1980) {
        generation = "X";
      } else if (year <= 1996) {
        generation = "Millennial";
      } else {
        generation = "Z";
      }
  
  document.getElementById("birthyear").value = "";

var resultYear = "You are" + " " + yearsOld + " " + "years old,"  + " " + "you belong to the" + " " + generation + " " + "Generation!"

return(document.getElementById("resultText").innerHTML = resultYear)
}  
