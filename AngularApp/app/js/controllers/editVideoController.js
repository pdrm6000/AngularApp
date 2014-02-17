'use strict';

angularApp.controller('editVideoController',
	function editVideoController($scope, $route, $location, videoDatacontext, youtubeProvider) {
        var id = $route.current.pathParams.id;
        videoDatacontext.getVideo(id).then(function(video){$scope.video = video});

        $scope.getVideoThumbnail = function(videoId){
            return youtubeProvider.getVideoThumbnail(videoId,'0');
        };

        $scope.saveVideo = function(video, form){
            videoDatacontext.saveVideo(video).then(function(){
                $('#actionPerformedModal').modal();
            });
        };
        $scope.cancel = function(){
            $location.path( "/list" );
        };
	}
);