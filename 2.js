/*Task:
First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.*/
const s=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
function vowelsAndConsonants() 
{
    let vowels=['a','e','i','o','u'];
    let v=[];
    let c=[];
    for(let i of s)
    {
        if(vowels.includes(i))
        {
            v.push(i);
        }
        else
        {
            c.push(i)
        }
    }
    for(let vowel of v)
    {
        console.log(vowel);
    }
    for(let con of c)
    {
        console.log(con);
    }  
} 
vowelsAndConsonants();