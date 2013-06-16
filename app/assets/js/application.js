angular.module('stashapp', ['ui.compat'])
	.config(
	[        '$stateProvider', '$routeProvider', '$urlRouterProvider',
	function ($stateProvider,   $routeProvider,   $urlRouterProvider) {

	// URL ROUTER PROVIDER
	$urlRouterProvider
		.when('/c?id', '/contacts/:id')
		.otherwise('/');

	// ROUTE PROVIDER
	$routeProvider
		.when('/user/:id', {
			redirectTo: '/contacts/:id',
		});
		//.when('/', {
		//	template: 'This is the homepage',
		//});

	// STATE PROVIDER
	$stateProvider

		/**
		 * Notifications
		 *
		 * @access        public
		 * @author        Charles Johnson <me@charlesjohnson.org>
		 * @copyright     Copyright (c) 2013, Charles Johnson
		 */
		.state('notifications', {
			url: '/notifications',
			templateUrl: 'notifications.html',
		})

		/**
		 * Contacts Section
		 *
		 * @access        public
		 * @author        Charles Johnson <me@charlesjohnson.org>
		 * @copyright     Copyright (c) 2013, Charles Johnson
		 */
		.state('contacts', {
			url: '/contacts',
			abstract: true,
			templateUrl: 'contacts.html',
			controller:
				[        '$scope','$state','$http',
				function ($scope,  $state,  $http) {

					$http.get('/api/friends').success(function(response) {
						console.log(response);
						$scope.contacts = response.data;
					});

					/*
					alert($state.current.name);
					if ($state.current.name === 'contacts.list') {
						$scope.transitionAnimation = 'slideLeft';
					}
					*/


			}],
		})

		// Initial Contacts page
        .state('contacts.list', {
          url: '',
          templateUrl: 'contacts.list.html',
        })
		
        // Contacts Detail
        .state('contacts.detail', {
			url: '/{contactId}',
			resolve: {
				resolved_status_id:
					[        '$timeout', '$stateParams',
					function ($timeout,   $stateParams) {
						return $timeout(function () { return "Asynchronously resolved data (" + $stateParams.contactId + ")" }, 10);
					}],
			},

          views: {
            '': {
              templateUrl: 'contacts.detail.html',
              controller:
                [        '$scope', '$stateParams', 'resolved_status_id',
                function ($scope,   $stateParams,   resolved_status_id) {
                  $scope.status_id = resolved_status_id;
                  $scope.contact = findById($scope.contacts, $stateParams.contactId);
                }],
            },
            'nav-header-left@': {
              template: '<a href="./#/contacts" class="icons-back"></a>',
            },
          },

        })

		// Contacts Detail for Items
        .state('contacts.detail.item', {
          // parent: 'contacts.detail',
          url: '/item/:itemId',
          views: {
            '': {
              templateUrl: 'contacts.detail.item.html',
              controller:
                [        '$scope', '$stateParams', '$state',
                function ($scope,   $stateParams,   $state) {
                  $scope.item = findById($scope.contact.items, $stateParams.itemId);
                  $scope.edit = function () {
                    $state.transitionTo('contacts.detail.item.edit', $stateParams);
                  };
                }],
            },
          },
        })

		// Contacts Detail for Items Editing
        .state('contacts.detail.item.edit', {
          views: {
            '@contacts.detail': {
              templateUrl: 'contacts.detail.item.edit.html',
              controller:
                [        '$scope', '$stateParams', '$state',
                function ($scope,   $stateParams,   $state) {
                  $scope.item = findById($scope.contact.items, $stateParams.itemId);
                  $scope.done = function () {
                    $state.transitionTo('contacts.detail.item', $stateParams);
                  };
                }],
            },
          },
        })


		/**
		 * Homepage/Feed
		 *
		 * @access        public
		 * @author        Charles Johnson <me@charlesjohnson.org>
		 * @copyright     Copyright (c) 2013, Charles Johnson
		 */
		.state('home', {
			url: '/',
			templateUrl: 'home.html',
		})

		/**
		 * Stash Section
		 *
		 * @access        public
		 * @author        Charles Johnson <me@charlesjohnson.org>
		 * @copyright     Copyright (c) 2013, Charles Johnson
		 */
		.state('stash', {
			url: '/stash',
			templateUrl: 'stash.html',
		})

		/**
		 * Add Section
		 *
		 * @access        public
		 * @author        Charles Johnson <me@charlesjohnson.org>
		 * @copyright     Copyright (c) 2013, Charles Johnson
		 */
		.state('add', {
			url: '/add',
			templateUrl: 'add.html',
		})

		/**
		 * Search Section
		 *
		 * @access        public
		 * @author        Charles Johnson <me@charlesjohnson.org>
		 * @copyright     Copyright (c) 2013, Charles Johnson
		 */
		.state('search', {
			url: '/search',
			templateUrl: 'search.html',
		})

		/**
		 * More Section
		 *
		 * @access        public
		 * @author        Charles Johnson <me@charlesjohnson.org>
		 * @copyright     Copyright (c) 2013, Charles Johnson
		 */
		.state('more', {
			url: '/more',
			templateUrl: 'more.html',
		})


	//END STATE PROVIDER ($stateProvider)
    }])


	// EXECUTE ANGULAR MODULE
	.run(
	[        '$rootScope', '$state', '$stateParams',
	function ($rootScope,   $state,   $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}]);



function findById(a, id) {
	for (var i=0; i<a.length; i++) {
		if (a[i].id == id) return a[i];
	}
}




