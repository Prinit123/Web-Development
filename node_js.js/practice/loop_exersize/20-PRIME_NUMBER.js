let a = 7;
let isPrime = true;

if (a <= 1) isPrime = false;

// Check up to the square root to make the loop lightning fast
for (let i = 2; i < a; i++) {
    if (a % i == 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime ? "prime number : " + a : "not prime number : " + a);