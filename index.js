import chalk from "chalk";
import inquirer from "inquirer";
//Classes Player & Opponent
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
// Player Name & Opponent Select
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name:"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
// Gether Data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // Skeleton
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "options",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."],
        });
        if (ask.options == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.yellow(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.yellow(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.yellow.bold.italic("YOU WIN!!!"));
                    process.exit();
                }
            }
        }
        if (ask.options == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.yellow(`You Drink health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.options == "Run For Your Life...") {
            console.log(chalk.red.bold.italic("You Loose,Better Luck Next Time"));
            process.exit();
        }
    }
    // Assassin
    if (opponent.select == "Assassin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "options",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."],
        });
        if (ask.options == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.yellow(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.yellow(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.yellow.bold.italic("YOU WIN!!!"));
                    process.exit();
                }
            }
        }
        if (ask.options == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.yellow(`You Drink health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.options == "Run For Your Life...") {
            console.log(chalk.red.bold.italic("You Loose,Better Luck Next Time"));
            process.exit();
        }
    }
    // Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "options",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."],
        });
        if (ask.options == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.yellow(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.yellow(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.yellow.bold.italic("YOU WIN!!!"));
                    process.exit();
                }
            }
        }
        if (ask.options == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.yellow(`You Drink health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.options == "Run For Your Life...") {
            console.log(chalk.red.bold.italic("You Loose,Better Luck Next Time"));
            process.exit();
        }
    }
} while (true);
