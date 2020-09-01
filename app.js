var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
  $scope.produtos = ["Leite", "Pão", "Queijo"];

  $scope.addItem = function () {
    if ($scope.produtos.indexOf($scope.item) == -1){
    	$scope.produtos.push($scope.item);
  } else {
  	$scope.errortext = "Esse produto já existe na sua lista";
  	alert($scope.errortext);
  }
}
    $scope.removeItem = function (x) {
    $scope.produtos.splice(x, 1);
    alert('Item removido');
  }
});