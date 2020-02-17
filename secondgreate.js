function secondGreate(arr)
{
    arr.sort(function(x, y)
    {
        return x-y;
    });
    var uniq = [arr[0]];
    var result = [];

    for (var i = 1; i < arr.length; i++)
    {
        if (arr[i-1] !== arr[i])
        {
            uniq.push(arr[i]);
        }
    }

    result.push(uniq[1], uniq[uniq.length-2]);
    return result.join(' ');
}
console.log("soal 1 = "+secondGreate([7,7,12,98,106]));