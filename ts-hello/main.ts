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

  // let a: number;
  // let b: boolean;
  // let c: string;
  // let d: any;
  // let e: number[]; //array
  // let f: any[];
  //
  // const ColorRed = 0;
  // const ColorGreen = 1;
  // const ColorBlue = 2;
  //
  // enum Color { Red = 0, Green = 1, Blue = 2 }; //each element automatically gets an incremented value unless explicitly set
  // let backgroundColor = Color.Red;

  let message = 'abc';
  let endsWithC = (<any>message).endsWith('c');

let log = function(message) {
  console.log(message);
}

let doLog = () => console.log();
