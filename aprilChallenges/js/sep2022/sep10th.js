function productArray(numbers) {
    return numbers.map(x => numbers.reduce((a, b) => {
        return ((a * b))
    }) / x)
}