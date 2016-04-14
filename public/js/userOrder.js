var expressNode = angular.module('expressNode', []);

function mainController($scope, $http, $rootScope) {
  $scope.formData = {};
  $scope.todos = [];

  // when landing on the page, get all todos and show them
  $scope.initialize = function() {
    $http.get('/api/todos')
    .success(function(data) {
      $scope.services = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };

  // when submitting the add form, send the text to the node API
  $scope.createTodo = function() {
    $http.post('/api/todos', $scope.formData)
    .success(function(data) {
      $('input').val('');
      $scope.todos = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };

  // delete a todo after checking it
  $scope.deleteTodo = function(id) {
    $http.delete('/api/todos/' + id)
    .success(function(data) {
      $scope.todos = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };

  $scope.services = [];

  $scope.toggleActive = function(s){
    s.active = !s.active;
  };

  $scope.placeOrder = function() {
    var orderList = [{
      name: ''
    }];
    angular.forEach($scope.services, function(s){
      if (s.active){
        orderList[0].name += s.name;
      }
    })

    $http.post('/client/api/order', $scope.services)
    .success(function(data) {
      console.log('no rerror')
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  }  

  $scope.total = function(){

    var total = 0;

    // Use the angular forEach helper method to
    // loop through the services array:

    angular.forEach($scope.services, function(s){
      if (s.active){
        total+= s.price;
      }
    });
    return total;
  };

}