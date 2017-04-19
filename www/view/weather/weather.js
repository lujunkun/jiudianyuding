app.controller("weatherCtrl",function($scope,$http,$ionicLoading){
	$ionicLoading.show()
	$http.get("https://ionic-in-action-api.herokuapp.com/weather").then(function(res){
		$scope.datas = res.data
		$ionicLoading.hide()
	}).catch(function(error){
		$ionicLoading.show({
            duration:3000
        })
	})
})