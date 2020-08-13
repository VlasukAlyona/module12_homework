const person = {

 city: "Moscow",
 age: 18

}

const student = Object.create(person);

student.ownCity = "Piter";
student.position = "designer";

function getPerson (obj) {
  for (let key in student) {

    if (student.hasOwnProperty(key)) {

        console.log(key);
    }   
  }
}

getPerson();
