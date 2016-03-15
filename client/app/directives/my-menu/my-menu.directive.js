;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('myMenu', myMenu);

	function myMenu() {
		return {
			templateUrl: '../app/directives/my-menu/template.html',
			replace: true,
			restrict: 'E',
			link: function (scope, element, attributes) {
				scope.show = function () {
					return show();
				}

				scope.hide = function () {
					return hide();
				}

				function show() {
					angular.element(document.querySelector('#my-super-menu')).css('left', '0px');
					angular.element(document.querySelector('.menu-overlay')).css('display', 'block');
					angular.element(document.querySelector('html')).css('overflow-y', 'hidden');
				}

				function hide() {
					angular.element(document.querySelector('#my-super-menu')).css('left', '-180px');
					angular.element(document.querySelector('.menu-overlay')).css('display', 'none');
					angular.element(document.querySelector('html')).css('overflow-y', 'auto');
				}
			}
		}
	}
})();