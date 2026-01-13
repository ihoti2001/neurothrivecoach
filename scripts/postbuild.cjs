const {spawnSync} = require('node:child_process')

if (process.env.VERCEL || process.env.REACT_SNAP !== '1') {
  console.log('Skipping react-snap (set REACT_SNAP=1 to run).')
  process.exit(0)
}

const command = process.platform === 'win32' ? 'npx.cmd' : 'npx'
const result = spawnSync(command, ['react-snap'], {stdio: 'inherit'})

if (result.status !== 0) {
  process.exit(result.status || 1)
}
