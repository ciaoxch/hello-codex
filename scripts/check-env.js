const { execFileSync } = require('node:child_process');

function getCommandVersion(command, args) {
  try {
    return execFileSync(command, args, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return 'not found';
  }
}

console.log(`Node: ${process.version}`);
console.log(`npm: ${getCommandVersion('npm', ['--version'])}`);
console.log(`Python: ${getCommandVersion('python3', ['--version'])}`);
