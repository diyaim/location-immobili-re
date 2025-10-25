export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', {
      jsc: {
        // si tu es en JS pur :
        parser: { syntax: 'ecmascript', jsx: true },
        // si tu es en TS, remplace par :
        // parser: { syntax: 'typescript', tsx: true },
        transform: { react: { runtime: 'automatic' } }
      },
      module: { type: 'es6' }
    }]
  },
  moduleNameMapper: {
    // CSS
    '\\.(css|scss|sass|less)$': 'identity-obj-proxy',

    // 🔴 Images (incluant PNG) → mock
    '\\.(svg|png|jpe?g|gif|webp|avif)$': '<rootDir>/src/__mocks__/fileMock.js',

    // Si tu utilises SVGR avec ?react
    '^.+\\.svg\\?react$': '<rootDir>/src/__mocks__/fileMock.js',

    // Alias Vite éventuel
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/']
}
