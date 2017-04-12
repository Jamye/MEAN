/*
We are going to create our very own constructor. Create a VehicleConstructor
that takes in the name, number of wheels, and the number of passengers. Then
complete the following tasks

Each vehicle should have a makeNoise method
Using the constructor, create a Bike Redefine the Bike’s makeNoise method to print “ring ring!”
Create a Sedan
Redefine the Sedan’s makeNoise method to print “Honk Honk!”
Using the constructor, create a Bus
Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​
*/

/*
Then make the following modifications:

Have the Vehicle constructor also take in a “speed” Store the speed as an attribute
Create a private variable called distance_travelled that starts at 0
Create a private method called updateDistanceTravelled that increments distance traveled by speed
Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
Add a method called checkMiles that console.logs the distance_travelled
*/

var VehicleConstructor = function(name, wheels, passengers, speed){

  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,wheels,passengerNumber, speed);
  }

  var self = this;
  var distance_travelled = 0;
  // var updateDistanceTravelled = function(){
  //   distance_travelled += self.speed
  //   console.log(distance_travelled);
  // }

  function updateDistanceTravelled(){
    distance_travelled += self.speed
    console.log(distance_travelled);
  }

  this.name = name,
  this.wheels = wheels,
  this.passengers = passengers,
  this.speed = 0,
  this.makeNoise = function(){
  },
  this.move = function(){
    updateDistanceTravelled();
    this.makeNoise();
  },
  this.checkMiles = function(){
    console.log(distance_travelled);
  }
}

var bike = new VehicleConstructor("Bike", 2, 1, 10);
// console.log(bike);
bike.checkMiles()
console.log(bike.speed);


//
// var sedan = new VehicleConstructor("Sedan", 4, 5);
// sedan.makeNoise = function(){
//   console.log("honk honk");
// }
// sedan.makeNoise();
//
// var bus = new VehicleConstructor("Bus", 16, 0);
// bus.addPassengers = function(riders){
//   bus.passengers += riders;
// }
// console.log(bus.passengers);
// bus.addPassengers(5);
// console.log(bus.passengers);
