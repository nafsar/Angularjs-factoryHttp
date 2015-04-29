var productControllers = angular.module('productControllers', []);

productControllers.controller('ProductListCtrl', function ($scope, products){
  products.list(function(products) {
    $scope.products = products;
  });
});

productControllers.controller('ProductDetailCtrl', function ($scope, $routeParams, products){
  products.find($routeParams.productId, function(product) {
    $scope.product = product;
  });
});

