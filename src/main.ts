import { setFailed, getInput, getBooleanInput } from '@actions/core';
import { Inputs, runEslint } from './eslint';

const run = async () => {
  try {
    const inputs: Inputs = {
      token: getInput('github-token', { required: true }),
      annotations: getBooleanInput('annotations'),
      eslintArgs: getInput('eslint-args').split(' '),
      binPath: getInput('bin-path'),
    };

    await runEslint(inputs);
    process.exit(0);
  } catch (err) {
    setFailed(err.message);
  }
};

run();
