/*1.Convert secondInteger to an integer (Number type), then sum it with firstInteger and print the result on a new line using console.log.
2.Convert secondDecimal to a floating-point number (Number type), then sum it with firstDecimal and print the result on a new line using console.log.
3.Print the concatenation of firstString and secondString on a new line using console.log. Note that firstString must be printed first.*/

let secondInteger='2';
let secondDecimal='4.0';
let secondString='myself Riya';
function performOperation()
{
    //Declare a varibale named firstInteger and intialize with integer value.
    const firstInteger=4;
    console.log(firstInteger+(+secondInteger));
    
    //Declare a variable named firstDecimal and initialize with floating value.
    const firstDecimal=3.0;
    console.log(firstDecimal+(+secondDecimal));

    //Declare a variable named firstString and initialize with the string 'HELLO!!'.
    const firstString='Hello!! ';
    console.log(firstString+secondString);
}
performOperation();
