const loadtest = require('loadtest');

const options = {
    url: 'http://localhost:8080/',
    maxRequests: 100
}

loadtest.loadTest(options, (error, result)=>{
    if (error) {
        console.error('Test failed:', error);
    } else {
        console.log('Test passed:', result);
    }
});

