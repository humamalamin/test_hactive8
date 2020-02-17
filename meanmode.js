function mean(number)
{
    var total = 0, i;
    for (i = 0; i < number.length; i++)
    {
        total += number[i];
    }

    return total / number.length;
}

console.log("Soal 3 = "+mean([3, 5, 4, 4, 1, 1, 2, 3]));