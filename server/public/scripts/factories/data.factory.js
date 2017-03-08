colorBlocks.factory('DataFactory', ['$http', function($http) {
  console.log("data factory running");

  var colorList = ['red', 'blue', 'magenta', 'green', 'pink'];

  return {
      colors: colorList,
    };

}]);
