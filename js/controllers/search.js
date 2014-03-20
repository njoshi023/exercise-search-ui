myApp.controller('Search', function($scope, $http) {
	$scope.exercises = [];
	var requestCount = 0;
	
	$scope.getResults = function() {		
		if ($scope.query =='') {			
			$scope.exercises = [];
			return;		  	
		}		
		var q = 'name:' + $scope.query + '^2' + ' description:' + $scope.query,
			url = 'http://54.85.121.157:8983/solr/collection1/select'
	
		jQuery.ajax({
		  url: url,
		  requestCount: ++requestCount,
		  data: {
		  	'q': q,
		  	'wt': 'json',
		  	'indent': 'true',
		  	'callback': 'jsonp_callback'

		  },
		  success: function(data){
		  	if (requestCount !== this.requestCount) {
		  		return;
		  	}
		  	$scope.$apply(function() {				
				$scope.exercises = data.response.docs;
		  	})
		  	
		  },
		  dataType: 'jsonp',
		  jsonp: 'json.wrf'
		});		
	};	
});
