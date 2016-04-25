angular.module('expressNode', [])
.controller('mainControll', function($scope,$http, $rootScope) {
  $scope.services = [];
  $scope.username = {};
  var toBeSent = [$scope.username, $scope.services];
  // when landing on the page, get all todos and show them
  $scope.initialize = function() {
    $http.get('/api/menu')
    .success(function(data) {
      $scope.services = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
    $http.get('/api/username')
    .success(function(name) {
      console.log(name);
      $scope.username = name;
      toBeSent = [$scope.username, $scope.services];
    })
    .error(function(data) {
      console.log('Error: ' + name);
    });
  };

  // var socket = io('http://localhost:5082');
    // socket.on('connect',function(){
    //       console.log('Socket connected');
    //       socket.emit('client_data', { Horas: 'data' });   
    // });

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
      toBeSent = [$scope.username, $scope.services];
      $http.post('/client/api/order', toBeSent)
      .success(function(data) {
        console.log(data);
        // Why is nth being logged??
        console.log('user posted on apu/order');
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

  // TODO add search functionality
  $scope.searchMenu = function (string) {
    console.log('recived name ' + string);
    angular.forEach($scope.services, function(s){
     angular.forEach(s, function(item){
      if (item.name == string){
        console.log('recived item of a name ' + string);
        item.active = true;
      }
    });
   });  
  }
})