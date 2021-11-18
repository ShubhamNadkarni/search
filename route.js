(function (angular) {
  "use strict";
  angular
    .module("filters", [])

    .controller("MainCtrl", function ($scope, $timeout, $filter) {
      $scope.newFunction = function () {
        var str = $scope.searchstr;

        $scope.finalArray = $filter("filter")($scope.getdata, str); //filter
        // $scope.items1 = $filter("filter")($scope.nextdata, str1, undefined);

        $scope.loader = true;
        $timeout(function () {
          $scope.finalArray = $scope.finalArray[0].title;
          // $scope.items1 = $scope.items1[0].title.toUpperCase();

          $scope.loader = false;
        }, 500);
      };
      $scope.myFunction = function () {
        var str = $scope.searchString;
        // console.log($scope.nextdata, "s");
        // console.log(str, "y");
        $scope.items = $filter("filter")($scope.nextdata, str); //filter
        // $scope.items1 = $filter("filter")($scope.nextdata, str1, undefined);
        console.log($scope.items, "N");
        $scope.loader = true;
        $timeout(function () {
          $scope.items = $scope.items[0].title;
          // $scope.items1 = $scope.items1[0].title.toUpperCase();

          $scope.loader = false;
        }, 500);
      };

      $scope.items = $scope.final;

      $scope.items = [
        {
          url: "https://en.wikipedia.org/wiki/Artificial_intelligence",
          title: "Artificial Intellegence",
          image: "AI.jpg",
        },
        {
          url: "https://en.wikipedia.org/wiki/Machine_learning",
          title: "Machine Learning",
          image: "md.jpg",
        },
        {
          url: "https://en.wikipedia.org/wiki/Robotics",
          title: "Robotics",
          image: "robotics.jpg",
        },
        {
          url: "https://en.wikipedia.org/wiki/Embedded_system",
          title: "Embedded Systems",
          image: "Embedded.jpg",
        },
        {
          url: "https://en.wikipedia.org/wiki/Python_(programming_language)",
          title: "Python",
          image: "python.jpg",
        },
      ];
      $scope.nextdata = angular.copy($scope.items);

      $scope.nitems = [
        {
          url: "https://en.wikipedia.org/wiki/Tata_Consultancy_Services",
          title: "TCS",
          image: "tcs.jpg",
        },
        {
          url: "https://en.wikipedia.org/wiki/Infosys",
          title: "Infosys",
          image: "in.jpg",
        },
        {
          url: "https://inferyx.com/",
          title: "Inferyx",
          image: "inferyx.jpg",
        },
        {
          url: "https://en.wikipedia.org/wiki/Tesla",
          title: "Tesla",
          image: "tesla.jpg",
        },
        {
          url: "https://en.wikipedia.org/wiki/Mahindra",
          title: "Mahindra",
          image: "mahindra.jpg",
        },
      ];

      $scope.finalArray = $scope.items.concat($scope.nitems);
      console.log($scope.finalArray, "work");
      $scope.getdata = angular.copy($scope.finalArray);
      // $scope.items = [
      //   {
      //     url: "https://inferyx.com/",
      //     title: "Inferyx",
      //     image: "inferyx.jpg",
      //   },
      //   {
      //     url: "https://en.wikipedia.org/wiki/Infosys",
      //     title: "Infosys",
      //     image: "in.jpg",
      //   },
      //   {
      //     url: "https://en.wikipedia.org/wiki/Tata_Consultancy_Services",
      //     title: "TCS",
      //     image: "tcs.jpg",
      //   },
      //   {
      //     url: "https://en.wikipedia.org/wiki/Tesla",
      //     title: "Tesla",
      //     image: "tesla.jpg",
      //   },
      //   {
      //     url: "https://en.wikipedia.org/wiki/Mahindra",
      //     title: "Mahindra",
      //     image: "mahindra.jpg",
      //   },
      // ];

      // $scope.nextdata = angular.copy($scope.company);
    })

    .directive("myDirective", function () {
      return {
        // restrict: "E",

        scope: {
          myinfo: "=info",
        },

        templateUrl: "my-directive.html",
        // templateUrl: "hello.html",
      };
    });
})(window.angular);
