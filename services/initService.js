ngPostsApp.factory('InitApp', ['$q', '$http', function ($q, $http) {

   return {

        getConfigData: function () {
			var URLData={
				"url":"http://jsonplaceholder.typicode.com/posts"
			}
			return URLData;
           
        }

    }






}]);