;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('ModalCtrl', ModalCtrl);

	ModalCtrl.$inject = ['$scope'];

	function ModalCtrl($scope) {
		$scope.yes = function () {
			return yes();
		}

		$scope.no = function () {
			return no();
		}

		function yes() {
			console.log('yes!');
		}

		function no() {
			console.log('no!');
		}
	}
})();