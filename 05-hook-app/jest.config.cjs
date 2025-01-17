
module.exports = {
    
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
}