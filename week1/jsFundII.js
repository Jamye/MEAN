/*
Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
Write a loop that will go through an array, find the minimum value, and then return it
Write a loop that will go through an array, find the average of all of the values, and then return it
*/

// function sumRange(numOne, numTwo){
//   var sum = 0;
//   for(var i = numOne; i <= numTwo; i++){
//     sum += i
//   }
//   return sum;
// }

// function min(arr){
//   var min = arr[0];
//   for (var i = 0; i < arr.length; i++){
//     if (arr[i] < min){
//       min = arr[i];
//     }
//   }
//   return min
//}

// function avg(arr){
//   var sum = 0;
//   for(var i = 0; i < arr.length; i++){
//     sum += arr[i];
//   }
//   return sum/arr.lenth
// }

// var sumRange = function(numOne, numTwo){
//   var sum = 0;
//   for(var i = numOne; i <= numTwo; i++){
//     sum += i
//   }
//   return sum;
// }

var min = function(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum/arr.lenth
}

// var avg = function(arr){
//   var sum = 0;
//   for(var i = 0; i < arr.length; i++){
//     sum += arr[i];
//   }
//   return sum/arr.lenth
// }

var myObject = {
                  "sumRange" : function(numOne, numTwo){
                                  var sum = 0;
                                  for(var i = numOne; i <= numTwo; i++){
                                    sum += i
                                  }
                                  return sum;
                                },
                  "min": function(arr){
                            var sum = 0;
                            for(var i = 0; i < arr.length; i++){
                              sum += arr[i];
                            }
                            return sum/arr.length
                          },
                  "avg" : function(arr){
                            var sum = 0;
                            for(var i = 0; i < arr.length; i++){
                              sum += arr[i];
                            }
                            return sum/arr.lenth
                          }
}
 // var listy = [2,1,4,5]
 // console.log(listy);
 //
 // console.log(myObject.min(listy))

var person = {
              name : "Waldo",
              distance_traveled : 0,
              say_name : function(){
                console.log(this.name)
              },
              say_something : function(str){
                console.log(this.name + " says " + str);
              },
              walk : function(){
                console.log(this.name + " is walking")
                this.distance_traveled += 3;
              },
              run : function(){
                console.log(this.name + " is running")
                this.distance_traveled += 10;
              },
              crawl : function(){
                console.log(this.name + " is crawling")
                this.distance_traveled += 1;
              }

}
console.log(person.distance_traveled)
person.crawl()
person.crawl()
console.log(person.distance_traveled)
