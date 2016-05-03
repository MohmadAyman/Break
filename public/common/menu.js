
// TODO to be included

angular.module('user').factory('Menu',
	function (){
		return{
			$http.get('/api/menu')
			.success(function(data) {
				$scope.services = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});

		}
	})
