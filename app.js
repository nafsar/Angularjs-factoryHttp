var productApp = angular.module('uiuxApp', ['ngRoute', 'productControllers']);

productApp.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'product-list.html',
      controller: 'ProductListCtrl'
    }).
    when('/:productId', {
      templateUrl: 'product-summary.html',
      controller: 'ProductDetailCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
});

productApp.factory('products', function($http){
  return {
    list: function (callback){
    	$http.get('products.json').success(callback);
    },
    find: function(id, callback){
    	
    	$http.get('product' + id +'.json').success(callback);
    }
  };
});

productApp.directive('product', function(){
  return {
    scope: {
      product: '='
    },
    restrict: 'A',
    templateUrl: 'product.html',
    controller: function($scope, products){
      products.find($scope.product.id, function(product) {
        $scope.flagURL = product.flagURL;
      });
    }
  };
});


productApp.directive('goBack', function($window){
	return{
		restrict:"A",
		link: function($scope, $element) {
            $element.on('click', function() {
               $window.history.back();             
            });
            
      }
	};
});
 
