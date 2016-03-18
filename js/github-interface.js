var getRepos = require('./../js/github.js').getRepos;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#userInfo').click(function() {
    var user = $('#username').val();
    $('#username').val("");
      $('.showUsername').text("Username: " + user);
  });
});
