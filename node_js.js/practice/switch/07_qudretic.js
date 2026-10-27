// Input coefficients
const a = 1;
const b = -5;
const c = 6;

// 1. Calculate the discriminant
const discriminant = (b * b) - (4 * a * c);

// 2. Map the discriminant to a simple integer sign
let sign;
if (discriminant > 0) {
    sign = 1;
} else if (discriminant === 0) {
    sign = 0;
} else {
    sign = -1;
}

// 3. Evaluate the outcome using a switch case
switch (sign) {
    case 1:
        const root1 = (-b + (d/2)) / (2 * a);
        const root2 = (-b - (d/2)) / (2 * a);
        console.log("Two real roots: " + root1 + " and " + root2);
        break;

    case 0:
        const root = -b / (2 * a);
        console.log("One real root: " + root);
        break;

    case -1:
        console.log("Complex roots (no real solutions)");
        break;
}
