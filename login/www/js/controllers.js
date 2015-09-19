angular.module('starter')

.controller('AppCtrl',function(){})

.controller('LoginCtrl',function(){})

.controller('DashCtrl',function($httpBackend,$http,$scope){
	$scope.stories=[];
	$httpBackend.whenGET(/.*/).passThrough();
	$http
	.get('http://www.reddit.com/r/Android/new/.json')
	.success(function(response){
		angular.forEach(response.data.children,function(child){
			$scope.stories.push(child.data)
		});
		
	});

});