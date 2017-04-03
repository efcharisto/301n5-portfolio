'use strict';

function randomNum(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

document.querySelector('.randomNum').innerHTML = randomNum(1, 100);

function Student(name, course, school, location) {
  this.firstName = name;
  this.course = course;
  this.school = school;
  this.location = location;
}
var Maks = new Student('Maks', '301 Intermediate Software Development', 'Code Fellow', 'Seattle, WA.');

document.getElementById('summary').innerHTML =
'My name is ' + Maks.firstName + '. I\'m currently taking ' + Maks.course + ' at ' + Maks.school + ', located in ' + Maks.location;
