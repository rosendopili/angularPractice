// function log(message) {
//   console.log(message);
// }
//
// var message = 'Hello World';
//
// log(message);
//
// function doSomething(){
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log('Finally: ' + i);
// }
//
// doSomething();
var a;
var b;
var c;
var d;
var e; //array
var f;
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //each element automatically gets an incremented value unless explicitly set  
var backgroundColor = Color.Red;
