(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchController);
              
LunchController.$inject = ['$scope'];

function LunchController($scope) {
  $scope.lunchlist = '';
  var flagWrong = false;

  $scope.msgLunch = function() {
    
    $scope.checkText();
    
    if($scope.lunchlist == '' || flagWrong){
      $scope.fontColor ={'padding-left': '5px', 'color' : 'red'};
      $scope.borderColor = {'border': 'red 1px solid'};
      $scope.messageLunch = "Please enter data first";
      flagWrong = false;
    }else{
      var arr = $scope.lunchlist.split(",");
      
      if(arr.length <= 3){
        $scope.fontColor ={'padding-left': '5px', 'color' : 'green'};
        $scope.borderColor = {'border': 'green 1px solid'};
        $scope.messageLunch = "Enjoy!";
      } else if(arr.length >= 4){
        $scope.fontColor ={'padding-left': '5px', 'color' : 'green'};
        $scope.borderColor = {'border': 'green 1px solid'};
        $scope.messageLunch = "Too much!";
      } 
    }
  };
  
  $scope.checkText = function () {
    if ($scope.lunchlist.indexOf(',') == -1 && $scope.lunchlist.indexOf(' ') != -1) {
      flagWrong = true;
    }
  }
};

})();
