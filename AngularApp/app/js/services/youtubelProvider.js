'use strict';

angularApp.factory('youtubeProvider',function($http, $q) {
	return {
		getVideoThumbnail: function (videoId, videoType) {
			return 'http://img.youtube.com/vi/' + videoId + '/' + videoType + '.jpg'
		},
		getVideoLink: function (videoId) {
			return 'http://www.youtube.com/watch?v=' + videoId;
		},
		getVideo: function (videoId) {
			var deferred = $q.defer();
			$http.get('https://gdata.youtube.com/feeds/api/videos/' + videoId + '?v=2')
				.success(function (response) { deferred.resolve(response) })
				.error(function (response) { deferred.resolve(response) });
			return deferred.promise;
		}
	};
});


