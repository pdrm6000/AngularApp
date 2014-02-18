﻿'use strict';

var editVideoController = angularApp.controller('editVideoController',
	function editVideoController($scope, $route, $location, videoDatacontext, youtubeProvider) {
		var id = $route.current.pathParams.id;
		$scope.video = $route.current.locals.video;

		$scope.getVideoThumbnail = function (videoId) {
			return youtubeProvider.getVideoThumbnail(videoId, '0');
		};

		$scope.saveVideo = function (video, form) {
			videoDatacontext.saveVideo(video).then(function () {
				$('#actionPerformedModal').modal();
			});
		};
		$scope.cancel = function () {
			$location.path("/list");
		};
	}
);

editVideoController.resolve = {
	video: function ($q, $route, videoDatacontext) {
		var deferred = $q.defer();
		videoDatacontext.getVideo($route.current.pathParams.id).then(function (video) { deferred.resolve(video); });
		return deferred.promise;
	}
}