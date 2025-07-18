const { execSync } = require('child_process');

console.log('🧪 Testing gittu CLI...');

try {
    // Test help command
    console.log('\n📋 Testing help command...');
    execSync('node bin/gittu.js help', { stdio: 'inherit' });
    console.log('✓ Help command works');

    console.log('\n🎉 Basic tests passed!');
} catch (error) {
    console.log('✗ Tests failed:', error.message);
}