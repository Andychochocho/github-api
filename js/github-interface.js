var getRepos = require('./../js/github.js').getRepos;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#userInfo').click(function() {
    event.preventDefault();
    var user = $('#username').val();
    $('#username').val("");
    $.get('https://api.github.com/users/' + user +  '?access_token=' + apiKey).then(function(response) {
      $('.showUsername').text("Username: " + response.login);
      $('.showAvatar').append('<img src=' + response.avatar_url + ">");
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });

    // $.get('https://api.github.com/users/:' + user + "/repos").then(function(response) {
    //   console.log(JSON.stringify(response));
    //   $('.showRepos').text("Repos: " + response.owner);
    // }).fail(function(error){
    //   console.log(error.responseJSON.message);
    // });
  });
});

      // $('.showRepos').text("Repos: " + response.public_repos);
