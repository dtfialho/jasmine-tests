(function() {
	'use strict';

	angular.module('meetIrl', ['ui.router', 'api.users', 'api.pokemon', 'components.users', 'components.missingno', 'components.profile'])
	.config(function($urlRouterProvider) {
		$urlRouterProvider.otherwise('/users');
	});
})();