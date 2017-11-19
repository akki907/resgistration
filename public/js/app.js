var app = angular.module('todoApp', ['ui.bootstrap']);

app.controller('myCtrl', function($scope,$http,$uibModal,$rootScope) {

  $scope.createUser = function(newUser){
    console.log(newUser);
    $http.post('/api/createSignUp',newUser)
    .then(function(response){
      console.log(response)
      $scope.signUp.FirstName = "";
      $scope.signUp.lastname = "";
      $scope.signUp.email = "";
      $scope.message = response.data;
              });
  }

  





});
