/**
 * Created by Jian Ping Xu on 6/25/2017.
 */
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.textTest = "TEST";

    $scope.test = function(text){
        $scope.textTest = text;
        return text;
    };
    $scope.add = function(stock){
        console.log(stock.toUpperCase());
        $http({
            method : "GET",
            url : "https://www.quandl.com/api/v3/datasets/WIKI/" + stock.toUpperCase() + "/data.json?start_date=2017-05-26api_key=oVbLj3p5Fg7A9JgLrDdFF"
        }).then(function mySucces(response) {
            console.log("POST SUCCESSFUL");
            console.log(response);
            $scope.posts = response.data.dataset_data.data;
            $scope.stockTicker = stock.toUpperCase();
        }, function myError(response) {
            console.log("ERROR: POST UNSUCCESSFUL");
        });
    };
    $scope.date = new Date();
});