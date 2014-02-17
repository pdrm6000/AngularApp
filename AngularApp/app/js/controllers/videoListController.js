'use strict';

angularApp.controller('videoListController',
	function videoListController($scope, $location, videoDatacontext, youtubeProvider) {
		videoDatacontext.getVideoList()
		.then(
			function (videos) { $scope.videoList = videos; },
			function (response) { console.log(response); }
		);

		$scope.getVideoThumbnail = function (videoId) {
			return youtubeProvider.getVideoThumbnail(videoId, '2');
		};

		$scope.getVideoLink = function (videoId) {
			return youtubeProvider.getVideoLink(videoId);
		};
	}
);