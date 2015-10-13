angular.module('translateApp', []);

angular.module('translateApp')
    .controller('translateController', ['$scope', '$http', function($scope, $http){
       

       

        
    var wrongCount = 0 
    var charCounter = 0
    //$scope.submissions =[];
    $scope.submit = function () {

        // console.log($scope.translate)
        // var orLang = $scope.translate.orLanguage
        // var destLang = $scope.translate.trLanguage
        // var aWord = $scope.translate.word
        // var gapi = "https://www.googleapis.com/language/translate/v2?key=AIzaSyC0mw4NLJ7pP3LBhu7zBuis_Xg17GJWxAk&q=" + aWord + "&source=" + orLang + "&target=" + destLang

        // $http.get(gapi)
        //     .then(function(returnData){
        //         console.log(returnData)
        //     $scope.finishedWord = returnData.data;
           
        // });

    $http.post('/submit', $scope.translate)
        .then(function(returnData) {
            // console.log(returnData.data)
            $scope.translatedWord = returnData.data
        })

    }
    $scope.wordsToTranslate = ['cat', 'dog', 'computer', 'sock', 'beard', 'tall', 'market', 'orange', 'wednesday', 'one']
    $scope.spanishAnswers= ['gato', 'perro', 'computadora', 'calcetin', 'barba', 'alto', 'mercado', 'naranja', 'miercoles', 'uno']
    $scope.answer = []
    $scope.answersSubmit = function(index) {

        var submissionobj = { startlang: 'en',
                               endlang: $scope.langSelect,
                               word: $scope.wordsToTranslate[index]}

        $http.post('/checkanswer', submissionobj)
        .then(function(returnData) { 

            // console.log(returnData.data[1])
            // console.log($scope.answer[index][1])
            for (var i = 0; i < returnData.data.length; i++) {
                if(returnData.data[i] != $scope.answer[index][i]) {
                    charCounter++
                    console.log(charCounter)
                }

            }


            if($scope.answer[index] == returnData.data) {
                alert('BOOM GOES THE DYNAMITE. You got that one right')
                console.log('correcto')
            } else if (charCounter == 1) {
                alert('mostly right, you were one character off. The correct word was ' + returnData.data)
            } 
            else {
                console.log('incorrecto')
                alert('WRONG. The right answer was ' + returnData.data)
                wrongCount++
                if (wrongCount === 3) {
                    alert('u suck so fucking much')
                    window.location.reload()
                }
            }
        })
    charCounter = 0
    }
        // if ($scope.langSelect == 'es') {
        //     console.log($scope.answer)
        //     if( $scope.answer[index] == $scope.spanishAnswers[index] ) {
        //         console.log('correcto') } else {
        //             console.log('incorrecto')
        //             wrongCount++
        //             if (wrongCount == 3) {
        //                 alert('you fucking suck')
        //                 window.location.reload()
        //             }
        //         }
        //     }
        // }



        
        
   
        
        
        
        
             
}])










