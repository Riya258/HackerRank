/*Task:
Complete the reverseString function; it has one parameter,s . You must perform the following actions:
Try to reverse string s using the split, reverse, and join methods.
If an exception is thrown, catch it and print the contents of the exception's  on a new line.
Print s on a new line. If no exception was thrown, then this should be the reversed string; 
if an exception was thrown, this should be the original string.*/

function reverseString(s) 
{
    s='1234';
    try
    {
        s=s.split("").reverse().join("");
        // let split=s.split("");
        // console.log(split);
        // let reversed=split.reverse();
        // console.log(reversed);
        // s=reversed.join("");
    }
    catch(err)
    {
        console.log(err.message);
    }
    finally
    {
        console.log(s);
    }
}
reverseString();

//split() converts a string into an array...
//reverse() method is used to reverse the elements of an array........
//join() method is used to converts an array into string......