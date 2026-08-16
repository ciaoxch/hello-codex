const { getEnvironmentVersions } = require('./environment');

for (const [name, version] of getEnvironmentVersions()) {
  console.log(`${name}: ${version}`);
}
