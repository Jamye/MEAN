var app = angular.module("myApp", ["ngRoute"]);

//define routes
app.config(function($routeProvider){
  $routeProvider
    .when("/users", {
      templateUrl: "static/partials/customizeUsers.html"
    })
    .when("/list", {
      templateUrl: "static/partials/userList.html"
    })
    .otherwise( {
      redirectTo: "/users"
    });
})

//creation of factory
app.factory("userFactory", [function (){
  var factory = {};

  //initialize our list of users
  var users = [
    {firstname: "Jaymes", lastName: "Yee", email: "gunk@gmail.com"},
    {firstname: "Penelo", lastName: "Chen", email: "runny@gmail.com"},
    {firstname: "Chloe", lastName: "Tarng", email: "foodie@gmail.com"}
  ];

  //pass the user list to the controller
  factory.index = function(callback){
    callback(users);
  }

  //add a new user to the list
  factory.create = function(user){
    users.push(user)
  }

  //removes the user from the list
  factory.delete = function($index){
    users.splice($index, 1);
  }

  return factory;
}]);



//inject userFactory into each controller
//factory needs to be above the controller in the code because
//we pass the factory into the controller
app.controller("customizeUsersController", ["$scope", "userFactory", function($scope, userFactory){
  function setUsers(data){
    $scope.users = data;
    $scope.newUser = {};
  }

  @scope.users = [];

  //when this controller is loaded, fetch the user list
  userFactory.index(setUsers);

  //pass new user info to the factory
  $scope.create = function(){
    userFactory.create($scope.newUser)
    //reset our form
    $scope.newUser = {};
  }

  //delegate deleting user to the factory
  $scope.delete = function($index){
    userFactory.delete($index);
  }

  $scope.users = [];

  //when this controller is loaded, fetch the user list
  userFactory.index(setUsers);


}])
