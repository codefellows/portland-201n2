var student = {
  firstName: "John",
  lastName: "Doe",
  email: "john@work.com",
  phone: "503-555-1234"
};
student.getFullName = function() {
  return this.firstName + " " + this.lastName;
}

var instructor = {
  firstName: "Jane",
  lastName: "Expert",
  email: "jane@gmail.com",
  phone: "503-555-9876"
};
instructor.getFullName = function() {
  return this.firstName + " " + this.lastName;
}

var guest = {
  firstName: "Zeus",
  lastName: "the Dude",
  email: "zeus@olympus.com",
  phone: "503-111-0000"
};
guest.getFullName = function() {
  return this.firstName + " " + this.lastName;
}

function sayGreeting(person) {
  var fullName = person.firstName + " " + person.lastName;
  alert("Hello! I'm "+fullName);
}

function addNames() {
  var listItem = document.getElementById("student");
  listItem.innerHTML = student.getFullName();
  listItem = document.getElementById("instructor");
  listItem.innerHTML = instructor.getFullName();
}

function addNamesToTable() {
  var table = document.getElementById("peopleListing");
  for (var index = 0; index < people.length; index++) {
    var personRow =  "<tr><td>"+people[index].getFullName()+"</td>";
    personRow += "<td>"+people[index].email+"</td>";
    personRow += "<td>"+people[index].phone+"</td></tr>";
    table.innerHTML += personRow;
  }
}

var people = new Array();
people.push(student);
people.push(instructor);
people.push(guest);
