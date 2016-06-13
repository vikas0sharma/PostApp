
ngPostsApp.directive('headerBanner', [ function () {

    return {
        restrict: 'A',
        scope: {
            ngHead: '@',
            ngSubhead: '@',
            ngImgpath:'@'
        },
        templateUrl: 'partials/banner/banner.html',
        link: function (scp, ele, attr) {
            ele.find('header').css('background-image', 'url(' + attr.ngImgpath + ')');
        }
    }
}])