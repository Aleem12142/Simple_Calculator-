import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { messege: "Enter first number", type: "number", name: "FirstNumber" },
    { messege: "Enter second number", type: "number", name: "SecondNumber" },
    {
        messege: "Select one of given operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Adition", "Subtraction", "Multiplication", "Division"]
    },
]);
if (answer.operator === "Adition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Please select a valid operator");
}
