var ngPostsApp = angular.module('ngPostsApp', ['postsApp.posts','postsApp.newposts', 'ngRoute'])
   
.config(function ($routeProvider) {
    $routeProvider.when('/',
    {
        templateUrl: 'views/posts/postsView.html',
        controller: 'PostsController'
    })
    .when('/newpost',
    {
        templateUrl: 'views/newpost/newPostView.html',
        controller: 'NewPostController'
    })
});


