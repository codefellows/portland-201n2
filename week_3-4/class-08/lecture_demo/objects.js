var Person = function (first, last, email, phone){
  this.firstName = first;
  this.lastName = last;
  this.email = email;
  this.phone = phone;
  this.getFullName = function() {
    return this.firstName + " " + this.lastName;
  };
};

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
people.push(new Person("John", "Doe", "john@work.com", "503-555-1234"));
people.push(new Person("Jane", "Expert", "jane@gmail.com", "503-555-9876"));
people.push(new Person("Zeus", "the Dude", "zeus@olympus.com", "503-111-0000"));
people.push(new Person("Mark", "Fitzgerald", "mark@codefellows.com", "503-555-5555"));
people.push(new Person("Cesar", "Jimenez", "cesar@codefellows.com", "503-555-7777"));
