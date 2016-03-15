;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('FormCtrl', FormCtrl);

	FormCtrl.$inject = ['$scope'];

	function FormCtrl($scope) {
		var data = {
			email: '',
			message: ''
		};

		$scope.data = data;

		$scope.send = function () {
			return send();
		}

		function send() {
			console.log($scope.data);
		}
	}
})();