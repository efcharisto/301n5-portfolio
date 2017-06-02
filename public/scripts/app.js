'use strict';

// var Handlebars = require('Handlebars');
// Linter throws this error for Handlebars.compile "handlebars not defined" on line 8.
// When I  fix the error using line 3 ^ it breaks my page... wat?
// template from class
var sourceHtml = $('#template').html();
var handleBarsTemplate = Handlebars.compile(sourceHtml);
//
// var job = {
//   name:  'an Astronaut',
//   age: '20',
//   employer: 'NASA, on the International Space Station Crew',
//   time: ' nearly 5 years',
//   purpose: 'The purpose of the International Space Station is to provide knowledge that is the foundation on which our journey to Mars is based. The space station advances scientific knowledge in Earth, space, physical and biological sciences for the benefit of people on Earth. The station serves as the world\'s leading laboratory for cutting-edge research and technology development that will enable human and robotic exploration beyond low-Earth orbit, on to asteroids and Mars'
// };
// var job2 = {
//   name: 'a Drilling Engineer',
//   age:'25',
//   employer: 'ExxonMobil',
//   time: 'about 7 years',
//   purpose: 'As a primary member of the wells team, I was responsible for planning and programming drilling and workover activities, making sure that safety and reliability are absolute priorities. I was involved in cost estimation and cost control for wells activities. Capability opportunities  included exploration, high pressure high temperature (HPHT), deepwater, multilateral, extended reach and development drilling. As a lead drilling engineer, I also took on supervisory and assurance responsibilities.'
// };
// var job3 =  {
//   name:  'Smokejumper Forest Fighter',
//   age: '37',
//   employer: 'EMERCOM',
//   time: '5 years, and I will continue to work here until my retirement',
//   purpose: 'Smokejumpers are flown into hot areas that hotshot crews and other firefighters cannot reach. Usually, the fire is in the early stages of development in an area inaccessible to ground transportation. Smokejumpers jump in groups of two to ten – with about 100 pounds of equipment apiece – and spend three to five days fighting the fire. When finished, we gathered together our equipment and packed it out to the nearest access road, which was often many miles away.'
// };
//
// var finalHtml = handleBarsTemplate(job);
// $('#handlebarsContent').append(finalHtml);
// $('#handlebarsContent').append(handleBarsTemplate(job2));
// $('#handlebarsContent').append(handleBarsTemplate(job3));

function randomNum(min, max) {
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

// ******************
$(function () {
  $.ajax({
    url: 'data/jobs.json'
  }).done(function (data) {
    data.indexOf(1);{
      (function (note) {
        $('#name').append('<div>' + note.name + '</div>');
        $('#age').append('<div>' + note.age + '</div>');
        $('#employer').append('<div>' + note.employer + '</div>');
        $('#time').append('<div>' + note.time + '</div>');
        $('#purpose').append('<div>' + note.purpose + '</div>');
      });
    }
  });
  console.log('request started: ' + Date.now());
});

$(document).ready(function() {
  $('.randomNum').click(function() {
    $('.randomNum').append(` More luck to you! `);
  });
});
