// create the module and name it
var portfolio = angular.module('portfolio',[]);

// create the controller and inject Angular's $scope
portfolio.controller('mainController', function($scope){
    // create a message to display in our view
    $scope.message = 'Check me out.';
})
