(function (angular) {
  "use strict";
  angular
    .module("filters", [])

    .controller("MainCtrl", function ($scope, $timeout, $filter) {
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
      $scope.newitems = angular.copy($scope.nitems);

      //   $scope.newFunction = function () {};
      //   // console.log($scope.finalArray, "work");
      //   $scope.getdata = angular.copy($scope.finalArray);
    })

    .directive("myDirective", function () {
      return {
        restrict: "EA",

        // transclude: true,

        scope: {
          myinfo: "=info",
        },

        link: function ($scope, $timeout, elem, attrs, $filter, controllers) {
          console.log($scope.myinfo, "inside link");
          // $scope.myInfo = function ($scope, $timeout, $filter) {
          //   // var str = $scope.searchString;
          //   // console.log(str, "print str");
          // };
          $scope.myFunction = function () {
            console.log($scope.myinfo, "print myinfo");

            // console.log(myinfo, "yes");
            var str = $scope.searchString;
            console.log(searchString, "yes");

            $scope.items = $filter("filter")($scope.myinfo, str, undefined); //filter

            $scope.loader = true;

            $timeout(function () {
              if ($scope.items) {
                $scope.items = $scope.items;
              }
              // $scope.items1 = $scope.items1[0].title.toUpperCase();
              $scope.loader = false;
            }, 2000);

            var str = $scope.searchstr;

            $scope.nitems = $filter("filter")($scope.myinfo, str, undefined); //filter

            $scope.loader = true;
            $timeout(function () {
              if ($scope.nitems) {
                $scope.nitems = $scope.nitems;
              }
              $scope.loader = false;
            }, 2000);
          };
        },

        templateUrl: "my-directive.html",
        // templateUrl: "hello.html",
      };
    });
})(window.angular);

// $scope.items = $scope.final;

// $scope.finalArray = $scope.items

// $scope.titlesArray=[];
// $scope.finalArray.forEach(element => {
//   $scope.titlesArray.push(element.title)
// });

// console.log($scope.finalArray);
// $scope.items1 = $filter("filter")($scope.nextdata, str1, undefined);
// $scope.displayArray = []
// $scope.finalArray.forEach(element => {
//   console.log(element.title)
//   console.log(str)
//   $scope.finalArray = $filter("filter")($scope.finalArray, str,undefined);
//   if(element.title==str){
//     $scope.displayArray.push(element)
//   }
// });
// console.log($scope.displayArray);
