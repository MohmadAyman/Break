  var expressNode = angular.module('expressNode', []);

  function mainController($scope, $http, $rootScope,$timeout) {
    $scope.services = [];
    var recivedOrder = [];
    $scope.Orders = [];
    var usersOrders = [];
    $scope.usersOrders = [];
    $scope.names = [];
    var numberOrderStatic = 1;
  // TODO when landing on the page, get all orders that have not been served and display them.
  $scope.initialize = function() {
  };

  var upView = function () {
    $scope.$apply();
    $scope.services = $scope.services;
  };

  socket.on('reciveOrder', function (data) {
    menuToOrderes(data); 
    $scope.names.push(data[0]);
    console.log('recived  order');
    upView();
  });

//   // for (var i = 0; i < names.length; i++) {
//   //   console.log(data[0]);
//   //   console.log(names[i]);
//   //   if (data[0] == names[i])
//   //   {
//   //   }
//   //   else{
//   //     console.log('Number until now');
//   //     console.log(numberOrderStatic);
//   //     numberOrderStatic = numberOrderStatic +1;
//   //     $scope.Orders[numberOrderStatic] = data[1];
//   //     names [numberOrderStatic] = data[0];
//   //     $timeout(upView,2000,true);
//   //     menuToOrderes(data[1]);  

// setInterval($scope.Refresh, 2000);

// Weired bug, had to do two loops.
// TODO
// Add the orders to the collection.
var menuToOrderes = function (data) {
 $scope.services = data[1];
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
  $scope.usersOrders.push(data);
}

// TODO 
// remove the order from the collection.
$scope.removeOrder = function(s) {
  console.log($scope.services.indexOf(s));
  $scope.services.splice($scope.services.indexOf(s), 1);
}

}