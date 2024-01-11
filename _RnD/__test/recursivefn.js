// 2 to the power of 3

function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1))

    /*
    if(n == 1){
        return x
    } else {
        return x * pow(x, n-1)
    }
    */
}

console.log(pow(2, 3))