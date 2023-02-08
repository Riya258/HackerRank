/*Task:
Declare a constant variable,PI , and assign it the value Math.PI. 
You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
declare a variable r and assign it the value 4.
Use PI and r to calculate the perimeter and area of a circle having radius r.
Print area as the first line of output and print perimeter as the second line of output.*/

const PI=Math.PI;
function main()
{
    let r=4;
    area=PI*r*r;
    perimeter=2*PI*r;
    console.log(area);
    console.log(perimeter);
}
main();
