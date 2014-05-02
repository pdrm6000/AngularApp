'use strict';

angularApp.directive('videoBox', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'templates/directives/videoBox.html',
		scope: {
			video: "=",
			getThumbnail: "&",
			getLink: "&",
		}
	};
});
