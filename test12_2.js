const person = {

 city: "Moscow",
 age: 18,
 ownCity: "Piter",
 position: "designer"

}

var str1 = "city";
var str2 = "region";

function getPerson (obj, str) {
  if (obj.hasOwnProperty(str)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

getPerson(person, str1);
getPerson(person, str2);
