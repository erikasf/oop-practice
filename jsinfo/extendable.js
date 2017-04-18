function Calculator() {
   //the inner workings of the calculators capabilities
     let innerWork = {
       "-": (a, b) => a - b,
       "+": (a, b) => a + b
     };

     this.calculate = function(str) {
   //space deliminated number space operand space number
       let split = str.split(' '),
         a = +split[0],
         operand = split[1],
         b = +split[2];
//checking to see if everything is a number that should be a number
       if (!innerWork[operand] || isNaN(a) || isNaN(b)) {
         return NaN;
       }

       return innerWork[operand](a, b);
     };
//this is what we allow to add into innerwork
     this.addMethod = function( name,func) {
       innerWork[name] = func;
     };
   }
   let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
