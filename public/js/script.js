function reciveOrders($scope){

	// Define the model properties. The view will loop
	// through the services array and genreate a li
	// element for every one of its items.
	$scope.items = [
    {
      title: 'Burger',
      price: '17'
    }
    ];

  // TodoService.getTodos().then(function(response) {
  //   console.log(response);
  //   $scope.orders = response;
  // })
    var sname = 'FROM ANGULAR'
    var name = { value: sname }

  // $scope.addTodo = function() {
  // }

  //   socket.on('orderList', function(data){
  //   $scope.orders.push(data);
  //     angular.forEach($scope.orders, function(s){
  //           console.log('in the loop ' + s.value);
  //     });
  //  });



	$scope.removeOrder = function(s,idx) {
	    $scope.items.splice($scope.items.indexOf(s), 1)
	}
	// Helper method for calculating the total price

}
