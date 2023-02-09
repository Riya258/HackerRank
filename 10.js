//get the second largest element in the array.............
function show(nums)
{
    nums=[2, 3, 6, 6, 5];
    nums.sort((a,b)=>b-a);
    let a=([...new Set(nums)]);
    console.log("second largest element in the array is:"+a[1]);
}
show();