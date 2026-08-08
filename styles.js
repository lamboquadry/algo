function reverseString(str) {
    return str.split("").reverse().join("");
}

function countCharacters(str) {
    return str.length;
}

function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function findMaximum(numbers) {
    return Math.max(...numbers);
}

function findMinimum(numbers) {
    return Math.min(...numbers);
}

function sumArray(numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

function filterArray(numbers) {
    return numbers.filter(number => number >= 5);
}

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function fibonacci(terms) {
    let sequence = [0, 1];

    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence.slice(0, terms);
}