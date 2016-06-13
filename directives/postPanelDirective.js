
ngPostsApp.directive('postPanel', ['$location', function ($location) {

    return {
        restrict: 'A',
        scope: {
            ngHeading: '@',
            ngBody: '@',
            ngAuthor: '@',
            ngDate:'@'
        },
        templateUrl: 'partials/postpanel/panel.html',
        link: function (scp, ele, attr) {
            ele.bind('click', function () {
                console.log('clicked', attr.ngHeading);
                console.log($location.path())
                scp.$apply(function () {
                    $location.path('/post/' + attr.ngHeading);
                })
                
            })
        }
    }
}])