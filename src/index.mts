#!/opt/homebrew/bin/node

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import chalk from "chalk";
import _ from "lodash";
import promptSync from "prompt-sync";
import { FRAMEWORKS } from "./data/data.mjs";
import { CLIENT_RENEG_LIMIT } from "tls";
import { clear } from "console";
// const { FRAMEWORKS, CLI_COMMANDS } = require("./data/data");

// RANDOMIZE FRAMEWORK
const randomIndex = Math.floor(Math.random() * FRAMEWORKS.length);
const randomFramework = _.startCase(_.toLower(FRAMEWORKS[randomIndex]));

const rl = readline.createInterface({ input, output });

const menu = () => {
  return `
  ${chalk.blue("Welcome to the Vite Framework Generator!")}
  ${chalk.green("Please select a framework to generate:")}
  ${chalk.yellow("1. React")}
  ${chalk.yellow("2. Vue")}
  ${chalk.yellow("3. Svelte")}
  ${chalk.yellow("4. Next")}
  ${chalk.yellow("5. Qwik")}
  ${chalk.yellow("6. Solid")}
  ${chalk.yellow("7. Astro")}
  ${chalk.yellow("9. Nuxt")}
  ${chalk.yellow("10. Sveltekit")}
  ${chalk.yellow("11. Solidstart")}
  ${chalk.yellow("12. Qwikcity")}
  ${chalk.yellow("13. Random")}
  ${chalk.red("14. Exit")}

  ${chalk.blue("Please enter your selection: ")}`;
};

const main = async () => {
  const answer = await rl.question(menu());
  switch (answer) {
    case "1":
      console.log(chalk.blue("React"));
      break;
    case "2":
      console.log(chalk.blue("Vue"));
      break;
    case "3":
      console.log(chalk.blue("Svelte"));
      break;
    case "4":
      console.log(chalk.blue("Next"));
      break;
    case "5":
      console.log(chalk.blue("Qwik"));
      break;
    case "6":
      console.log(chalk.blue("Solid"));
      break;
    case "7":
      console.log(chalk.blue("Astro"));
      break;
    case "9":
      console.log(chalk.blue("Nuxt"));
      break;
    case "10":
      console.log(chalk.blue("Sveltekit"));
      break;
    case "11":
      console.log(chalk.blue("Solidstart"));
      break;
    case "12":
      console.log(chalk.blue("Qwikcity"));
      break;
    case "13":
      console.log(chalk.blue(randomFramework));
      break;
    case "14":
      console.log(chalk.blue("Exit"));
      break;
    default:
      console.log(chalk.red("Invalid selection"));
      break;
  }

  rl.close();
  console.log("Goodbye!");
  return -1;
};

main();
