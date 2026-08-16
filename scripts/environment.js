const { execFileSync, execSync } = require('node:child_process');

const isWindows = process.platform === 'win32';

function getCommandVersion(command, args = ['--version']) {
  try {
    if (isWindows) {
      // Commands and arguments are fixed within this project; execSync supports .cmd wrappers.
      return execSync([command, ...args].join(' '), {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
    }

    return execFileSync(command, args, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return 'not found';
  }
}

function getFirstAvailableVersion(commands) {
  for (const command of commands) {
    const version = getCommandVersion(command);
    if (version !== 'not found') {
      return version;
    }
  }

  return 'not found';
}

function getEnvironmentVersions() {
  return [
    ['Node.js', process.version],
    ['npm', getCommandVersion(isWindows ? 'npm.cmd' : 'npm')],
    ['Python', getFirstAvailableVersion(isWindows ? ['python', 'py'] : ['python3', 'python'])],
  ];
}

module.exports = { getEnvironmentVersions };
