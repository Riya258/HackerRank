/*Task:
Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e., n factorial).*/
function factorial(n)
{
    if(n<0)
    {
        return -1;
    }
    else if(n==0||n==1)
    {
        return 1;
    }
    else
    {
        
        return n*factorial(n-1);
        console.log(n);
    }
}
let a=factorial(4);
console.log('Factorial of the given no. is:'+a);
