import { test, expect } from '@playwright/test';

function reverseString(input: string): string {
    let reversedString = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reversedString += input[i];
    }
    return reversedString;
}

const inputString = "Hello, World!";
const result = reverseString(inputString);

console.log(`Original String: ${inputString}`);
console.log(`Reversed String: ${result}`);
