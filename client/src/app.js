var app = angular.module('plunker', [])
.config(function($sceDelegateProvider) {
   $sceDelegateProvider.resourceUrlWhitelist([
     'self',
     '*://www.youtube.com/**'
   ]);
 });

app.controller('MainCtrl', function($scope) {
  $scope.video = {
    youtubeid: 'no2kfii-kUc'
  }
  $scope.getUrl = function (id) {
    return '//www.youtube.com/embed/'+id+'?rel=0'
  }
  $scope.url = $scope.getUrl('no2kfii-kUc')
  
});
