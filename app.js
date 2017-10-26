(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('myController',myController);
myController.$inject = ['$scope'];

function myController ($scope){



   $scope.content = "";
   $scope.result = "";
   $scope.myclass = "";

   $scope.check = function(){
       var content = $scope.content;
     //  var result = $scope.result;

     if( content.trim() == ""){
       $scope.result = "Please fill the input";
       $scope.myclass = "text-danger";
       return;
     }

     var a = content.split(',');
     if(countArray(a)<=3){
      $scope.result = "Enjoy !! ";
      $scope.myclass = "text-success" ;
     }

     else{
       $scope.result = "Too much !! ";
       $scope.myclass = "text-danger"; 
     }



   };


   function countArray(foodArray){
     var t=0;
     for (var i=0; i<foodArray.length; i++){
     if(foodArray[i].trim()!= "") t++;
   }
   return t;
  };

}



})();
