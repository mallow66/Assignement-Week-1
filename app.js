(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('myController',myController);
myController.$inject = ['$scope'];

function myController ($scope){



   $scope.content = "";
   $scope.result = "";

   $scope.check = function(){
       var content = $scope.content;
     //  var result = $scope.result;

     if( content.trim() == ""){
       $scope.result = "Please fill the input";
       return;
     }

     var foodArray = content.split(',');
     if(foodArray.length <=3) $scope.result = "Enjoy !! ";
     else $scope.result = "Too much !! ";

   };
}

})();
