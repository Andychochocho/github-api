var getRepos = require('./../js/github.js').getRepos;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#userInfo').click(function() {
    //user info
    var user = $('#username').val();
    $('#username').val("");
    $.get('https://api.github.com/users/' + user +  '?access_token=' + apiKey).then(function(response) {
      $('.showUsername').text("Username: " + response.login);
      $('.showAvatar').append('<img src=' + response.avatar_url + ">");
      $('.showRepoNum').text('Public repository number: ' + response.public_repos);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
    //list all repositories
    $.get('https://api.github.com/users/' + user + "/repos?access_token=" + apiKey).then(function(response) {
    for (var i = 0; i < response.length; i++) {
      $('.showRepos').append(response[i].name + "<br>");
    }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});
