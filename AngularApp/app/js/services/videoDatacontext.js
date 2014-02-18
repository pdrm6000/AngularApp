'use strict';

angularApp.factory('videoDatacontext', function ($resource, $q, $http, $timeout) {

	return {
		getVideoList: function () {
			var deferred = $q.defer();

			$http({ method: 'GET', url: 'http://localhost:58157/api/Video' })
		        .success(function (data) {
		        	deferred.resolve(data);
		        })
		        .error(function (data, status) {
		        	deferred.reject(status);
		        });
			return deferred.promise;
		},
		addVideo: function (video) {
			var deferred = $q.defer();
			$resource('http://localhost:58157/api/Video', {}, { 'Post': { method: 'POST' } })
		        .save(video,
			        function (response) { deferred.resolve(response) },
			        function (response) { deferred.resolve(response) }
		        );
			return deferred.promise;
		},
		getVideo: function (id) {
			var deferred = $q.defer();
			$timeout(function() {
				$resource('http://localhost:58157/api/Video', { id: '@id' }, { 'Get': { method: 'GET', isArray: false, params: {} } })
					.get({ id: id },
						function(video) {
							deferred.resolve(video);
						},
						function(response) {
							deferred.reject(response);
						});
			}, 1500);
			return deferred.promise;
		},
		saveVideo: function (video) {
			var deferred = $q.defer();
			$http.put('http://localhost:58157/api/Video', video, {})
                .success(function (response) { deferred.resolve(response) })
                .error(function (response) { deferred.resolve(response) });
			return deferred.promise;
		}
	}
});



/*
 var videoList = [
 {
 id : 1,
 youtubeId: 'jsM2E1BaBQc',
 name : 'The black keys',
 creationDate: Date.now(),
 author: 'the band'
 },
 {
 id : 2,
 youtubeId: 'mIQToVqDMb8',
 name : 'Gan ga style',
 creationDate: Date.now(),
 author: 'japonese people'
 },
 {
 id : 3,
 youtubeId: 'prwhAsWo7gg',
 name : 'No sense video',
 creationDate: Date.now(),
 author: 'Anybody'
 },
 {
 id : 4,
 youtubeId: 'UOQRgs3jIS4',
 name : 'Kitty´s videos',
 creationDate: Date.now(),
 author: 'A girl'
 },
 {
 id : 5,
 youtubeId: '8F4R590qxGE',
 name : 'Some badass concert',
 creationDate: Date.now(),
 author: 'Rockers'
 },
 {
 id : 6,
 youtubeId: 'OT9HsNszYCI',
 name : 'A full movie',
 creationDate: Date.now(),
 author: 'the pirate bay'
 },
 ]
 */