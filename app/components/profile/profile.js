(function() {
	'use strict';

	angular.module('components.profile', [])
	.controller('ProfileController', function(resolvedUser, Pokemon, $state) {
		var vm = this;
		if(resolvedUser) {
			vm.user = resolvedUser;
		} else {
			return $state.go('404');
		}

		Pokemon.findByName(vm.user.pokemon.name)
		.then(function(res) {
			vm.user.pokemon.id = res.id;
			vm.user.pokemon.image = res.sprites.front_default;
			vm.user.pokemon.type = res.types[0].type.name;
		})
		.catch(function(res) {
			vm.user.pokemon.image = 'http://i.imgur.com/HddtBOT.png';
		});
	})
	.config(function($stateProvider) {
		$stateProvider
		.state('profile', {
			url: '/user/:id',
			templateUrl: 'components/profile/profile.html',
			controller: 'ProfileController as pc',
			resolve: {
				resolvedUser: function(Users, $stateParams) {
					return Users.findById($stateParams.id);
				}
			}
		});
	});
})();