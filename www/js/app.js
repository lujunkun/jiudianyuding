var app = angular.module("myApp",["ionic"])

app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/home")
	$stateProvider.state("home",{
		url:"/home",
		templateUrl:"view/home/home.html"
	}).state("list",{
		url:"/list",
		templateUrl:"view/list/list.html"
	}).state("room",{
		url:"/room",
		templateUrl:"view/room/room.html",
		controller:"roomCtrl"
	}).state("weather",{
		url:"/weather",
		templateUrl:"view/weather/weather.html",
		controller:"weatherCtrl"
	}).state("cheer",{
		url:"/cheer",
		templateUrl:"view/cheer/cheer.html",
		controller:"cheerCtrl"
	})
})



