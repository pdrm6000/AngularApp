'use strict';

var angularApp = angular.module('angularApp', ['ngResource', 'ngRoute'])
	.config(function ($routeProvider) {

		$routeProvider.when('/new',
			{
				templateUrl: 'templates/new.html',
			}
		);
		$routeProvider.when('/list',
			{
				templateUrl: 'templates/list.html',
				controller: 'listController'
			}
		);
		$routeProvider.when('/edit/:id',
            {
                templateUrl: 'templates/edit.html',
                controller: 'editController',
                resolve: editController.resolve,
            }
        );
        $routeProvider.when('/edit',
            {
                templateUrl: 'templates/edit.html',
                controller: 'editController',
            }
        );
		
		$routeProvider.otherwise({ redirectTo: '/list' });
	});

