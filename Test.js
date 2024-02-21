const jwt = require('jsonwebtoken');

// Example user data

const userData = {
    id: 123,
    username: 'example_user'
};

// Secret key to sign the JWT
const secretKey = '1234'; // Make sure to keep this secret!

// Generate a JWT token
const token = jwt.sign(userData, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour

console.log('Generated JWT token:', token);

// Verify the JWT token
(async () => {
    let a = await jwt.verify(token, secretKey);
    console.log({a});

    let b = await jwt.verify(token, "ABCD");
    console.log({b});
})()
