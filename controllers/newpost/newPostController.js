var ngNewPosts = angular.module('postsApp.newposts', [])

.controller('NewPostController', ['$scope','PostService', function ($scope, PostService) {

    $scope.postData = {};
    $scope.postData.id = '';
    $scope.postData.title = '';
    $scope.postData.body = '';
    $scope.postData.userId = '';
    $scope.isPostCreated=false;
    
	$scope.addNewPostClickHandler=function(data){

		PostService.addNewPost(data,successHandler);
	}
	var successHandler=function(res){

		if(res.status==201){
			$scope.isPostCreated=true;
			console.log($scope.isPostCreated);
		}
	}
		


}])