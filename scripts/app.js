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
//trying to make this work but stuck --> div.name and so on, diffferent html elements and not just div because at this point it moves everyting into 1 div.

// have html elements where different text will be. title, job description, etc. Not just 1 div.
// also have an html element where eeeverything will go , all the jobs at the end.
// send to html each individual job with its poperties and text section to the big html element where eeeeeverything will be.
// Use handlebars to replace text in those html elements.

// template from class
var sourceHtml = $('#template').html();
var handleBarsTemplate = Handlebars.compile(sourceHtml);

var data = {
  siteName:  'Code Fellows Demo',
  admin: 'toasty',
  body: '<p>Hello World from handlebars!</p>'
};

var data2 = {
  siteName: 'another site',
  admin: 'steeve mcqueen',
  body: '<p>another template render</p>'
};

var finalHtml = handleBarsTemplate(data);
$('#content').append(finalHtml);
$('#content').append(handleBarsTemplate(data2));
// template from class ends


Jobs.prototype.toHtml = function() {
  var $postJobs = $('jobs.template').clone();
  $postJobs.find('br').html(this.name);
  $postJobs.find('div').html(this.body);
  $postJobs.find('div').html(this.time);
  $postJobs.find('div').html(this.purpose);
  // $('#content .content');

  return $postJobs.html();

}
