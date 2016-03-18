var getRepos = require('./../js/github.js').getRepos;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#userInfo').click(function() {
    var user = $('#username').val();
    $('#username').val("");
    $.get('https://api.github.com/users/' + user +  '?access_token=' + apiKey).then(function(response) {
      $('.showUsername').text("Username: " + response.login);
      $('.showAvatar').append('<img src=' + response.avatar_url + ">");
      $('.showRepoNum').text('Public repository number: ' + response.public_repos)
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });

    $.get('https://api.github.com/users/' + user + "/repos" + '?access_token=' + apiKey).then(function(response) {
      $('.showRepos').text("Repos: " + response.login);
      console.log(JSON.stringify(response.login));
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});
