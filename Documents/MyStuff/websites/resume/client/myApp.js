var app = angular.module("myApp",['ngRoute']);

//here is a test of angular routing using ngRoute module
//resume by googling angular routing
//currently not working
//var app = angular.module("myApp", ["ngRoute"]);
//requires the script for ngRoute module, see HTML
//must run a http server to request page see steps below
//in cmd assuming node.js installed, type "http-server <app directory>"

app.config(function($routeProvider){

  $routeProvider.when('/', {
      templateUrl : 'main.htm',
      controller : 'textArea'
  }).when('/alternate', {
      templateUrl: 'alternate.htm'})
})

//need JQUERY library to acces DOM elements
app.controller("textArea", function($scope, $location){
  $scope.text = "This is a very long paragraph" +
  "to show the extent of a text area" +
  "and demostrate scope in angular controllers."

  $scope.first_name = "Bjorn";
  $scope.last_name = "Reyes";
  $scope.portrait = "images/portrait.jpg";
  $scope.full_name = function(){
    return $scope.first_name + " " + $scope.last_name;
  }
  $scope.textClick = function(){
    $scope.text = "I just change the text";
  }
  $scope.educationClick = function(){
    $location.path('/alternate');
  }
});
