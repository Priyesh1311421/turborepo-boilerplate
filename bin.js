#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repoUrl = 'https://github.com/Priyesh1311421/turborepo-boilerplate.git';

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const projectName = process.argv[2];
if (!projectName) {
  console.error('Please provide a project name.');
  process.exit(1);
}

const gitCheckoutCommand = `git clone --depth 1 ${repoUrl} ${projectName}`;
const installDepsCommand = `cd ${projectName} && pnpm install`;

console.log(`Cloning the repository with name ${projectName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(1);

console.log(`Installing dependencies for ${projectName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(1);

console.log('Setup complete. Happy coding!');