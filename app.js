/**
* @author: Vikas Sharma
* @email :mailbox.viksharma@gmail.com
*
*
*/
var ngPostsApp = angular.module('ngPostsApp', ['postsApp.posts', 'postsApp.post', 'postsApp.newposts', 'ngRoute'])

.config(function ($routeProvider) {
    $routeProvider.when('/',
    {
        templateUrl: 'views/posts/postsView.html',
        controller: 'PostsController'
    }).
    when('/post/:postTitle',
    {
        templateUrl: 'views/post/post.html',
        controller: 'PostController'

    }).when('/about',
    {
        templateUrl: 'views/about/aboutView.html',
    }).when('/contact',
    {
        templateUrl: 'views/contact/contactView.html',
    })
    .when('/newpost',
    {
        templateUrl: 'views/newpost/newPostView.html',
        controller: 'NewPostController'
    })
});


var scrollVal = 0;
$(window).scroll(function (ev) {

    var st = $(this).scrollTop();
    if (st > scrollVal) {
        $('nav').removeClass('navbar-custom').addClass('navbar-custom-new');
    }
    else
        $('nav').removeClass('navbar-custom-new').addClass('navbar-custom');

    scrollVal = st;
});