app.controller("cheerCtrl", function($scope, $http) {
	$scope.page = 0
	$scope.datas = {}
	$scope.datas.restaurants = []
	$scope.datas.currentPage = 0
	$scope.loadMore = function() {
		$scope.page++
			$http.get("https://ionic-in-action-api.herokuapp.com/restaurants", {
				pamars: {
					page: $scope.page
				}
			}).then(function(res) {
				console.log(res.data)
				$scope.datas.totalPages = res.data.totalPages
				$scope.datas.currentPage += res.data.currentPage
					console.log($scope.datas.currentPage)
				for(var i in res.data.restaurants) {
					$scope.datas.restaurants = $scope.datas.restaurants.concat(res.data.restaurants[i])
				}
//				useItems(items);
				$scope.$broadcast('scroll.infiniteScrollComplete');
			})
	}
	$scope.$on('stateChangeSuccess', function() {
		$scope.loadMore();
	});
	$scope.loadMore()

})