ngPostsApp.service('PostService', ['$http', '$q', 'InitApp', function ($http, $q, InitApp) {
   
    

    var deferred = $q.defer();
    var url = InitApp.getConfigData().url;

    this.getAllPosts = function () {
		
		return $http.get(url)
            .then(function (response) {
                deferred.resolve(response.data);
                return deferred.promise;
            }, function (response) {
                deferred.reject(response);
                return deferred.promise;
            })
        ;
    };

    this.addNewPost = function (_data,successHandler,errorHandler) {

        
        $http.post(url, _data).then(
        function (result) {
            successHandler(result)
        }, function (response) {
           errorHandler(response);
        }
       );

    }

}])