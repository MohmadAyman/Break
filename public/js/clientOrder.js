  var expressNode = angular.module('expressNode', []);

  function mainController($scope, $http, $rootScope,$timeout) {
    $scope.services = [];
    var recivedOrder = [];
    $scope.Orders = [];
    $scope.usersOrders = [];
    var names = [];
    var numberOrderStatic = 1;
  // when landing on the page, get all orders and show them.
  $scope.initialize = function() {
    // $http.post('/client/ordersUpdate')
    // .success(function(data) {
    //   console.log(data);
    //   $scope.Orders[numberOrderStatic] = $scope.Orders[numberOrderStatic];
    // })
    // .error(function(data) {
    //   console.log('Error: ' + data);
    // });
  };

  var upView = function () {
    console.log('up');
    $scope.$apply();
    $scope.services = $scope.services;
  };

  socket.on('reciveOrder', function (data) {
    menuToOrderes(data[1]);  
    console.log('recived  order');
    upView();
  });

//   $scope.Refresh= function(){
// // when an order comes, diplay it instantly.
// $http.post('/client/ordersUpdate')
// .success(function(data) {
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
//   //   }
//   // }
//   $scope.Orders[numberOrderStatic] = data[1];
//   names [numberOrderStatic] = data[0];
//   $timeout(upView,2000,true);
//   menuToOrderes(data[1]);  
// })
// .error(function(data) {
//   console.log('Error: ' + data);
// });
// }

// setInterval($scope.Refresh, 2000);

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
  $scope.usersOrders.push($scope.services);
  console.log($scope.services);
  console.log(usersOrders);
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