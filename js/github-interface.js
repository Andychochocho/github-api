var getRepos = require('./../js/github.js').getRepos;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#userInfo').click(function() {
    var user = $('#username').val();
    $('#username').val("");
    $('.showUsername').text("Username: " + user);
    $.get('https://api.github.com/users/' + user +  '?access_token=' + apiKey).then(function(response) {
      console.log(JSON.stringify(response));
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});
