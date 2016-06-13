var ngPosts = angular.module('postsApp.posts', [])


.controller('PostsController', ['$scope', 'PostService', function ($scope, PostService) {


    PostService.getAllPosts()
        .then(
            function (result) {
                console.log(result);
                $scope.posts = result;
            },
            function (error) {
                console.log(error.statusText);
            }
        );

    // var newPost = {
    //     body:"quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto",
    //     id:1123,
    //     title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //     userId:11243
    // }
    // PostService.addNewPost(newPost);

}]);