// npm packages
import chalk from 'chalk';
import yargs from 'yargs';

// our packages
import login from './login';

// init program
yargs
  .version('0.1.0')
  .completion()
  .demand(1)
  .help();

// plug commands
login(yargs);

// parse
yargs.argv; // eslint-disable-line

// output all uncaught exceptions
process.on('uncaughtException', err => console.error(chalk.red('Uncaught exception:'), err));
process.on('unhandledRejection', error => console.error(chalk.red('Unhandled rejection:'), error));
