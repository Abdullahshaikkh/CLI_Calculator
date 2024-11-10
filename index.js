#! /usr/bin/env node
console.log("By Abdullah Shaikh");
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplycation", "Division"]
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplycation") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else {
    (answer.operator === "Division");
    console.log(answer.firstNumber / answer.secondNumber);
}
