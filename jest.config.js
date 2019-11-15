module.exports = {
    testEnvironment: 'jsdom',
    collectCoverage: true,
    setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest'
    }
};
