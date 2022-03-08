#! /usr/bin/env node
import fs from "fs";
import { program } from "commander";
import chalk from "chalk";
import { createDirectory, createPath, createFileName } from "./src/helpers.js";

const main = () => {
  const defaultDirectory = createPath();
  createDirectory(defaultDirectory);
  const defaultFileName = createFileName();
  const defaultDestination = `${defaultDirectory}${defaultFileName}`;

  const defaultTemplate = "./notes-template.md";

  fs.copyFile(defaultTemplate, defaultDestination, (err) => {
    if (err) {
      console.log(chalk.red(err));
      fs.closeSync(fs.openSync(defaultDestination, "w"));
    } else {
      console.log(
        chalk.green(
          `A markdown file was successfully created to ${defaultDirectory} with name: ${defaultFileName} : ${defaultDestination}`
        )
      );
    }
  });
};

program
  .description("Create a md file in `./YEAR/Jan/08-Tue.md` path")
  .action(main);
program.parse();
