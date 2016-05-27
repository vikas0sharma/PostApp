
ngPostsApp.directive('postPanel', function () {

    return {
        restrict: 'A',
        scope: {
            ngHeading: '@',
            ngBody:'@'
        },
        templateUrl: 'partials/postpanel/panel.html'
    }
})