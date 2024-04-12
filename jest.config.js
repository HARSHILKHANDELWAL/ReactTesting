/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // presets: [
   
  //   ['@babel/preset-env', {targets: {node: 'current'}}],
  //   '@babel/preset-typescript',
  // ],
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  moduleNameMapper:{
    "^axios$": "axios/dist/node/axios.cjs"
  },
   transform: {
    '\\.[jt]sx?$': 'esbuild-jest',
  },
};