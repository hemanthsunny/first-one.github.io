var app = angular.module("apps",["ngRoute","ngAnimate"]);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$locationProvider.html5Mode(true);

	$routeProvider
		.when('/home',{
			templateUrl: 'views/home.html',
			controller: 'controls'
		})
		.when('/contact',{
			templateUrl: 'views/contact.html',
			controller: 'controls'
		})
		.when('/contact-success',{
			templateUrl: 'views/contact-success.html',
			controller: 'controls'
		})
		.when('/directory',{
			templateUrl: 'views/directory.html',
			controller: 'controls'
		}).otherwise({
			redirectTo: '/home'
		});
}]);

app.run(function(){

});


app.controller("controls",['$scope','$http','$location',function($scope,$http,$location){

	$scope.removeItem = function(numbers){
		var removedItem = $scope.colors.indexOf(numbers);
		$scope.colors.splice(removedItem,1);
	};

	$scope.addItem = function(){
		$scope.colors.push({
			name: $scope.newdragon.name,
			color: $scope.newdragon.belt,
			rate: parseInt($scope.newdragon.rate),
			available: true
		});

		$scope.newdragon.name = "";
		$scope.newdragon.belt = "";
		$scope.newdragon.rate = "";
	};

	$scope.removeAll = function(){
		$scope.colors = [];
	}

	$http.get('data/dragons.json').success(function(data){
		$scope.colors = data;
	});

	$scope.sendMessage = function(){
		$location.path('/contact-success');
	}

}]);
/*
app.controller('ContactController',[$scope,$location,function($scope,$location){
	$scope.sendMessage = function(){
		$location.path('/contact-success');
	}
}]);
*/
app.directive('randomDragon',function(){
	return{
		restrict: 'E',
		scope: {
			colors: '=',
			title: '='
		},
		transclude: true,
		replace: true,
		templateUrl: 'views/random.html',
		controller: function($scope){
			$scope.random = Math.floor(Math.random() * 4);
		}		
	};
});
