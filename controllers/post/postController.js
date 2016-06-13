var ngPost = angular.module('postsApp.post', [])

.controller('PostController', ['$scope','$location', 'PostService', function ($scope,$location,  PostService) {
   
    var title = $location.path().substring($location.path().lastIndexOf('/') + 1);
    $scope.post = '';
    PostService.getAllPosts()
         .then(
             function (posts) {
                 angular.forEach(posts, function (post) {
                     if (post["title"] == title) {
                         $scope.post = post;
                         console.log(post)
                     }
                 });
                 if ($scope.post == '')
                 {
                     $location.url('/#');

                 }

             },
             function (error) {
                 console.log(error.statusText);
                 $location.url('/#');
             }
         );
    
   

}])