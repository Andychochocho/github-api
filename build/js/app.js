(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "d715b7d676cfb9ea4009a3c070d151c439b8cb05"

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username) {
  //user info
  $.get('https://api.github.com/users/' + username +  '?access_token=' + apiKey).then(function(response) {
    $('.showUsername').text("Username: " + response.login);
    $('.showAvatar').append('<img src=' + response.avatar_url + ">");
    $('.showRepoNum').text('Public repository number: ' + response.public_repos);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

  // list all repositories
  $.get('https://api.github.com/users/' + username + "/repos?access_token=" + apiKey).then(function(response) {
  for (var i = 0; i < response.length; i++) {
    $('.showRepos').append(response[i].name + "<br>");
  }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/github.js":2}]},{},[3]);
