describe('Capitalize filter', function() {
	var capitalizeFilter;

	beforeEach(angular.mock.module('filters.capitalize'));
	beforeEach(inject(function(_$filter_) {
		capitalizeFilter = _$filter_('capitalize');
	}))

	it('should capitalize the forst lettrer of a string', function() {
		expect(capitalizeFilter('blastoise')).toEqual('Blastoise');
	});
});