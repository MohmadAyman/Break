var expressNode = angular.module('expressNode', []);

function mainController($scope, $http, $rootScope,$timeout) {
  $scope.services = [];
  var Orders = [];
  var userOrder = [];
  var numberOrderStatic = 0;
  // when landing on the page, get all orders and show them.
  $scope.initialize = function() {
    $http.get('/client/ordersUpdate')
    .success(function(data) {
      console.log(data);
      menuToOrderes(data[1]);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };

var upView = function () {
  console.log('up view');
  $scope.services = $scope.services;
};

$scope.Refresh= function(){
// when an order comes, diplay it instantly.
$http.get('/client/ordersUpdate')
.success(function(data) {
  console.log('client interface 2 recived');
  $timeout(upView,2000,true);
  menuToOrderes(data);
})
.error(function(data) {
  console.log('Error: ' + data);
});
}

setInterval($scope.Refresh, 2000);

// Weired bug, had to do two loops.
// TODO
// Add the orders to the collection.
var menuToOrderes = function (data) {
     $scope.services = data;

 angular.forEach($scope.services, function(s){
  if (s.active){
  }
  else{
    $scope.removeOrder(s);
  }
});
 angular.forEach($scope.services, function(s){
  if (s.active){
  }
  else{
    $scope.removeOrder(s);
  }
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

// TODO 
// remove the order from the collection.
$scope.removeOrder = function(s) {
  $scope.services.splice($scope.services.indexOf(s), 1);
}

}