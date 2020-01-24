let sum = 0;
for (let i = 2; i < process.argv.length; i++) {
    const val = Number(process.argv[i]);
    if (isNaN(val)) {
        throw new Error(`number passed at index ${i} is not a number`);
    }
    sum += val;
}

console.log(sum);
