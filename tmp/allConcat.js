var getRepos = require('./../js/github.js').getRepos;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#userInfo').click(function() {
    event.preventDefault();
    $('.showUsername').empty();
    $('.showAvatar').empty();
    $('.showRepoNum').empty();
    $('.showRepos').empty();
    var username = $('#username').val();
    getRepos(username);
  });
});
