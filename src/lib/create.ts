import * as prompt from 'prompt';
import * as shell from 'shelljs';
import * as fs from 'fs';
import * as colors from "colors/safe";
import * as path from 'path';
import { paramCase } from 'param-case';
import { mkdirSync } from 'fs';

prompt.message = colors.green("Replace");

export const create = (args, options, logger) => {
  // currently we only have one variant, but keep variable for extensibility later
  const variant = 'default';

  // make path to template
  const templatePath = path.join(__dirname, `../../templates/${variant}`);

  console.log('template path: ', templatePath);
  // variable names (ex. [VARIABLE_NAME]) for this template
  const variables = [
    'name',
    'version',
    'description',
    'author',
    'license'
  ];

  // prompts user to fill template values
  logger.info('Please fill the following values…');

  prompt.start().get(variables, (err, result) => {
    result.name = paramCase(result.name);
    const localPath = path.join(process.cwd(), result.name);

    if (!fs.existsSync(localPath)) {
      mkdirSync(localPath);
    } else {
      logger.error(`The path ${localPath} already exists. Please choose a different name or delete the existing file or folder first.`);
    }
    // recursively copy template dir to working directory if the template directory exists
    if (fs.existsSync(templatePath)) {
      logger.info('Copying files…');
      shell.cp('-R', `${templatePath}/*`, localPath);
      logger.info('✔ The files have been copied!');
    } else {
      logger.error(`The requested template for ${args.template} wasn't found.`)
      process.exit(1);
    }

    // Replace variable values in all files recursively
    shell.ls('-Rl', '.').forEach(entry => {
      if (entry.isFile()) {
        // Replace '[VARIABLE]` with the corresponding variable value from the prompt
        variables.forEach(variable => {
          shell.sed('-i', `\\[${variable.toUpperCase()}\\]`, result[variable], entry.name);
        });

        // Insert current year in files
        shell.sed('-i', '\\[YEAR\\]', new Date().getFullYear(), entry.name);
      }
    });

    logger.info('✔ Success! Please make sure to run `npm install` before beginning. Then just start using `npm run start:dev`!');
  });
};
