/*Task
Complete the function in the editor. 
It has one parameter: an array, a, of objects. Each object in the array has two integer properties denoted by x and y. 
The function must return a count of all such objects o in array a that satisfy o.x==o.y.*/

function getCount(objects) 
{
    objects=
    [
        {x:1,y:1},
        {x:2,y:3},
        {x:3,y:3},
        {x:3,y:4},
        {x:4,y:5}
    ]
    let count=0;
    objects.filter(function(element)
    {
        if(element.x==element.y)
        count++;
    });
    //return count;
    console.log(count);
}
getCount();




//https://ui.dev/javascript-visualizer