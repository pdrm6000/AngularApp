'use strict';

angularApp.controller('newVideoController',
	function newVideoController($scope, $location, videoDatacontext, youtubeProvider) {
        $scope.video = {};

        $scope.addVideo = function(video,form){
            videoDatacontext.addVideo(video).then(function(response){
                console.log(response);
                $('#actionPerformedModal').modal();
            },function(response){
                console.log(response);
            });
        };

        $scope.cancel = function(){
            $location.path( "/list" );
        };

        $scope.validate = function(youtubeId){
           youtubeProvider.getVideo(youtubeId).then(function(obj){
               $scope.video.name= '';
               $scope.video.creationDate= '';
               $scope.video.author='';
           });
        }
	}
);