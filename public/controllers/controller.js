var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

	var refresh = function() {
		$http.get('/contactlist').success(function(response) {
			console.log("I got the data I requested");
			$scope.contactlist = response;
		});
	};
	
	refresh();
	
	$scope.addContact = function() {
		console.log("Adding: " + $scope.contact);
		$http.post('/contactlist', $scope.contact).success(function(response) {
			console.log(response);
			$scope.contact = "";
			refresh();
		});
	};
	
	$scope.deleteContact = function(id) {
		console.log("Deleting: " + id);
		$http.delete('/contactlist/' + id).success(function(response) {
			refresh();
		});
	};
	
	$scope.getUpdateContact = function(id) {
		console.log(id);
		$http.get('/contactlist/' + id).success(function(response) {
			$scope.contact = response;
		});
	};
	
	$scope.updateContact = function() {
		console.log("Updating: " + $scope.contact._id);
		$http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
			refresh();
		});
	};
	
	$scope.clearForm = function() {
		console.log("Clearing form");
		$scope.contact = "";
		refresh();
	};
	
}]);