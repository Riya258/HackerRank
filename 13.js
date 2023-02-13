/*Task
Complete the function in the editor. 
It has two parameters: a and b. 
It must return an object modeling a rectangle that has the following properties:
length: This value is equal to a.
width: This value is equal to b.
perimeter: This value is equal to 2.(a+b) 
area: This value is equal to  a.b  */

function Rectangle(a, b) 
{
    const rectangle=
    {
        length:a,
        width:b,
        perimeter:2*(a+b),
        area:a*b
    };
    //return rectangle;
    console.log(rectangle.length);
    console.log(rectangle.width);
    console.log(rectangle.perimeter);
    console.log(rectangle.area);
    
}
Rectangle(4,5);