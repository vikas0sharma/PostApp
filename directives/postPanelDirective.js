
ngPostsApp.directive('postPanel', function () {

    return {
        restrict: 'A',
        scope: {
            ngHeading: '@',
            ngBody: '@',
            ngAuthor: '@',
            ngDate:'@'
        },
        templateUrl: 'partials/postpanel/panel.html'
    }
})