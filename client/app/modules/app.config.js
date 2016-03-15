;
(function () {
	'use strict';
	angular
		.module('app')
		.config(configurator);

	configurator.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'valdrProvider'];

	function configurator($stateProvider, $urlRouterProvider, $locationProvider, valdrProvider) {
		$locationProvider.html5Mode(true);

		$urlRouterProvider.otherwise('/cats');

		$stateProvider
			.state('cats', {
				url: '/cats',
				templateUrl: '../app/views/cats.html'
			})
			.state('dogs', {
				url: '/dogs',
				templateUrl: '../app/views/dogs.html'
			})
			.state('horses', {
				url: '/horses',
				templateUrl: '../app/views/horses.html'
			})
			.state('contactus', {
				url: '/contactus',
				templateUrl: '../app/views/contactus.html',
				controller: 'FormCtrl'
			});


		valdrProvider.addConstraints({
			'Form': {
				'email': {
					'email': {
						'message': 'Некорректный e-mail'
					},
					'required': {
						'message': 'Обязательное поле'
					}
				},
				'message': {
					'size': {
						'min': 10,
						'max': 1000,
					},
					'required': {
						'message': 'Обязательное поле'
					}
				}
			}
		});
	}
})();