var count = 0;
function MultiplicativePersistence(num) {
    if (num.toString().length == 1)
    {
        return count;
    }
    count++;

    var a = 1;
    var split = num.toString().split("");
    for (var i = 0; i < split.length; i++)
    {
        a *= parseFloat(split[i]);
    }

    return MultiplicativePersistence(parseFloat(a));
}

console.log("Soal 2 = "+ MultiplicativePersistence(39));