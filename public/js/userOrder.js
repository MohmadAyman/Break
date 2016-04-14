var expressNode = angular.module('expressNode', []);

function mainController($scope, $http, $rootScope) {
  $scope.services = [];
  // when landing on the page, get all todos and show them
  $scope.initialize = function() {
    $http.get('/api/menu')
    .success(function(data) {
      $scope.services = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };

  $http.get('/api/menu')
  .success(function(data) {
    $scope.services = data;
  })
  .error(function(data) {
    console.log('Error: ' + data);
  });

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