'use strict';

var angularApp = angular.module('angularApp', ['ngResource', 'ngRoute'])
	.config(function ($routeProvider) {

		$routeProvider.when('/new',
			{
				templateUrl: 'templates/new.html',
				controller: 'newVideoController'
			}
		);
		$routeProvider.when('/list',
			{
				templateUrl: 'templates/list.html',
				controller: 'videoListController'
			}
		);
		$routeProvider.when('/edit/:id',
            {
                templateUrl: 'templates/edit.html',
                controller: 'editVideoController'
            }
        );
        $routeProvider.when('/edit',
            {
                templateUrl: 'templates/edit.html',
                controller: 'editVideoController'
            }
        );
		
		$routeProvider.otherwise({ redirectTo: '/list' });
	});

