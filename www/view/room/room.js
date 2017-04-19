app.controller("roomCtrl",function($scope){
	$scope.data = {
		room:108,
		checkIn:new Date(),
		checkOut:new Date((new Date()).getTime() + 7 * 24 * 60 * 60 * 1000),
		price:999,
		wifi:1234567890
	}
})