'use strict';

angularApp.directive('videoBox', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: function (element, attr,x,y) {
			return attr.videoTemplate;
		},
		scope: {
			video: "=",
			getThumbnail: "&",
			getLink: "&",
			changeView: "&",
		}
	};
});
