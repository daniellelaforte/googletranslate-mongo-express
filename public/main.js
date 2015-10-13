angular.module('translateApp', []);

angular.module('translateApp')
    .controller('translateController', ['$scope', '$http', function($scope, $http){
       

       

        
    //$scope.submissions =[];
    $scope.submit = function () {

        console.log($scope.translate)
        var orLang = $scope.translate.orLanguage
        var destLang = $scope.translate.trLanguage
        var aWord = $scope.translate.word
        var gapi = "https://www.googleapis.com/language/translate/v2?key=AIzaSyC0mw4NLJ7pP3LBhu7zBuis_Xg17GJWxAk&q=" + aWord + "&source=" + orLang + "&target=" + destLang

        // $http.get(gapi)
        //     .then(function(returnData){
        //         console.log(returnData)
        //     $scope.finishedWord = returnData.data;
           
        // });

    $http.post('/submit', $scope.translate)  

    }



        
        
   
        
        
        
        
        
        
}])










