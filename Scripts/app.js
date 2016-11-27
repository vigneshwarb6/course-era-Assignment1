(function(){
'use strict';
angular.module('MyFirstAssgmt',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
$scope.MyEntry="";
$scope.LunchCheck=function(){
var NbrofItems=$scope.MyEntry.split(',');
console.log(NbrofItems);
$scope.MyEntry.length==0?$scope.DisplayMsg='Please Enter the data first'
:NbrofItems.length<=3?$scope.DisplayMsg='Enjoy!':$scope.DisplayMsg='Too Much!';
};
}
})();
