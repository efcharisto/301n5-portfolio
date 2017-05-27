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

function Jobs (jobsObject) {
  this.name = jobsObject.name;
  this.body = jobsObject.body;
  this.time = jobsObject.time;
  this.purpose = jobsObject.purpose;
}
//trying to make this work but stuck
Jobs.prototype.toHtml = function() {
  var $postJobs = $('jobs.template').clone();
  $postJobs.find('div').html(this.name);
  $postJobs.find('div').html(this.body);
  $postJobs.find('div').html(this.time);
  $postJobs.find('div').html(this.purpose);

  return $postJobs;

}
