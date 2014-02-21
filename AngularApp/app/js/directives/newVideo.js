'use strict';

angularApp.directive('newVideo', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'templates/directives/newVideo.html',
		controller: 'newVideoController',
		scope: {},
	};
});