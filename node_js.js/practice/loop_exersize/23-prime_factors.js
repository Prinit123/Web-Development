let a = 30;

for (let i = 2; i < a; i++) {
    let isprime = true;
    
    // Start a string with "1" since 1 is always a factor
    let factorsString = "1";

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isprime = false;
            // Add a comma, a space, and the new factor to our string
            factorsString = factorsString + ", " + j;
        }
    }
    
    // Add the final number to the end of the string
    factorsString = factorsString + ", " + i;

    if (isprime) {
        console.log("prime number :", i, " | Factors: " + factorsString);
    } else {
        console.log("not prime number :", i, " | Factors: " + factorsString);
    }
}